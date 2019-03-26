import React from 'react'
import axios from 'axios'
// import User from '../../../controllers/user'
import Auth from '../../lib/auth'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

let arrayNumber = null

function checkFriend(value, i) {
  console.log(value._id)
  if (value._id === Auth.getPayload().sub) {
    console.log('true')
    arrayNumber = i
    console.log(arrayNumber)
    return true
  } else {
    console.log('false')
    return false
  }
}

function checkPending (value) {
  if (value[arrayNumber].status === 'pending') {
    return true
  } else {
    return false
  }
}

function checkRequested (value) {
  if (value[arrayNumber].status === 'requested') {
    return true
  } else {
    return false
  }
}

function checkAccepted (value) {
  if (value[arrayNumber].status === 'accepted') {
    return true
  } else {
    return false
  }
}

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

  // componentDidUpdate() {
  //   axios.get(`/api/user/${this.props.match.params.id}`)
  //     .then(res => this.setState({ data: res.data }))
  // }

  handleSubmit(e) {
    e.preventDefault()
    console.log('hello')
    axios.post('/api/friends',
      this.props.match.params,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        console.log(res)
        document.location.reload(true)
        // this.forceUpdate()
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }



  render() {
    // console.log(Auth.getPayload().sub, this.props.match.params)
    // console.log((this.state.data.friends.forEach(checkRequest)))
    console.log(this.state.data.friends)
    const { user } = this.state.data
    if(!this.state.data) {
      return null
    } else if (Auth.getPayload().sub === this.props.match.params.id) {
      return (<Redirect to="/profilePage" />)
    } else if (user) {
      return(
        <main className="section">
          <div className="container margin-maker">
            <div className="columns">
              <div className="column is-half">
                <h2 className="title">{user.username}’s Profile</h2>
              </div>
              <div className="column is-half">
                {(this.state.data.friends.some(checkFriend)) && checkPending(this.state.data.friends) &&
                <button className="button is-info is-rounded is-pulled-right">
                Requested
                </button>
                }
                {(this.state.data.friends.some(checkFriend)) && checkAccepted(this.state.data.friends) &&
                <button className="button is-info is-rounded is-pulled-right">
                Friends
                </button>
                }
                {(this.state.data.friends.some(checkFriend)) && checkRequested(this.state.data.friends) &&
                <button onClick={this.handleSubmit} className="button is-info is-rounded is-pulled-right">
                Accept Request
                </button>
                }
                {(!this.state.data.friends.some(checkFriend)) &&
                <button onClick={this.handleSubmit} className="button is-info is-rounded is-pulled-right">
                Request Friend
                </button>
                }
              </div>
            </div>
            <hr />
            <div className="columns is-multiline">
              <div className="column is-half">
                <figure className="image">
                  <img src={user.image} alt={user.username} />
                </figure>
                <br />
                <h4 className="title is-4">{user.name}</h4>
                <hr />
                <h4 className="title is-4">Location</h4>
                <p>{user.location}</p>
                <hr />
                <h4 className="title is-4">Bio</h4>
                <p>{user.bio}</p>
                <hr />
                <h4 className="title is-4">Categories</h4>
                {user.categories && <p>{user.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}
                </p>}
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Reviews</h4>
                {user.reviews && user.reviews.map((review, i) => (
                  <Link key={i} to={`/review/${review._id}`}><strong>{review.restaurantName}</strong><br />{review.reviewHeadline}<br />{review.rating} Stars<br /><br /></Link>))}
                <hr />
                <h4 className="title is-4">Recipes</h4>
                {user.recipes && user.recipes.map((recipe, i) => (
                  <Link key={i} to={`/recipe/${recipe._id}`}><strong>{recipe.name}</strong><br />{recipe.description}<br /><br /></Link>))}
              </div>
            </div>
          </div>
        </main>
      )
    } else {
      return null
    }
  }
}
//tryal
export default UserShow

// <Link className="button is-warning" to={`/reviews/${review._id}/edit`}>Edit</Link>}
