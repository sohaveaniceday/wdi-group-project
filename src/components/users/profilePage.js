import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class ProfilePage extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

  }

  componentDidMount() {
    axios.get(`/api/user/${Auth.getPayload().sub}`)
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state.data.categories)
    if(!this.state.data) return null
    const { data } = this.state
    return(
      <main className="section">
        <div className="container user-show">
          <h2 className="title">Hello {data.username}!</h2>
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
              {data.categories && <div>{data.categories.map(category => (
                <p key={category._id}>{category.name} <br /></p>))}
              </div>}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default ProfilePage

// <Link className="button is-warning" to={`/reviews/${review._id}/edit`}>Edit</Link>}
