import React from 'react'
import axios from 'axios'
// import User from '../../../controllers/user'
import Auth from '../../lib/auth'
import { Redirect } from 'react-router'

class UserShow extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/user/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  handleSubmit(e) {
    e.preventDefault()
    // User.requestFriend(this.state.data._id, Auth.getPayload().sub)
    //   .then(() => console.log('Request sent'))
  }

  render() {
    // console.log(Auth.getPayload().sub, this.props.match.params.id)
    if(!this.state.data) {
      return null
    } else if (Auth.getPayload().sub === this.props.match.params.id) {
      return (<Redirect to="/profilePage" />)
    } else {
      const { data } = this.state
      return(
        <main className="section">
          <div className="container user-show">
            <h2 className="title">{data.username}’s Profile</h2>
            <button onSubmit={this.handleSubmit} className="button is-info is-rounded">Request Friend</button>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={data.image} alt={data.username} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">{data.name}</h4>
                <hr />
                <h4 className="title is-4">Location</h4>
                <p>{data.location}</p>
                <hr />
                <h4 className="title is-4">Bio</h4>
                <p>{data.bio}</p>
                <hr />
                <h4 className="title is-4">Categories</h4>
                {data.categories && <div>{data.categories.map((category, i) => (
                  <p key={i}>{category.name} <br /></p>))}
                </div>}
              </div>
            </div>
          </div>
        </main>
      )
    }
  }
}
//tryal
export default UserShow

// <Link className="button is-warning" to={`/reviews/${review._id}/edit`}>Edit</Link>}
