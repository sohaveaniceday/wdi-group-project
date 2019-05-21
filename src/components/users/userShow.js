import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import Auth from '../../lib/auth'

let arrayNumber = null

function checkFriend(value, i) {
  if (value._id === Auth.getPayload().sub) {
    arrayNumber = i
    return true
  } else {
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

  handleSubmit() {
    axios.post('/api/friends',
      this.props.match.params,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        document.location.reload(true)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    const { user } = this.state.data
    if(!this.state.data) {
      return null
    } else if (Auth.getPayload().sub === this.props.match.params.id) {
      return (<Redirect to="/profilePage" />)
    } else if (user) {
      return(
        <main className="section profile-page">
          <div className="container margin-maker margin-auto">
            <div className="extra-padding has-background-white margin-topbottom curve-border">
              <div className="columns">
                <div className="column is-half">
                  <h2 className="title">{user.username}’s Profile</h2>
                </div>
                <div className="column is-half pin-column">
                  {(this.state.data.friends.some(checkFriend)) && checkPending(this.state.data.friends) &&
                  <a className="button is-rounded is-pulled-right pin-button">
                    <span className="icon">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <span>Requested</span>
                  </a>
                  }
                  {(this.state.data.friends.some(checkFriend)) && checkAccepted(this.state.data.friends) &&
                  <a className="button is-rounded is-pulled-right pin-button">
                    <span className="icon">
                      <i className="fas fa-user-friends"></i>
                    </span>
                    <span>Friends</span>
                  </a>
                  }
                  {(this.state.data.friends.some(checkFriend)) && checkRequested(this.state.data.friends) &&
                  <a className="button is-rounded is-pulled-right pin-button" onClick={this.handleSubmit}>
                    <span className="icon">
                      <i className="fas fa-check-circle§"></i>
                    </span>
                    <span>Accept Request</span>
                  </a>
                  }
                  {(!this.state.data.friends.some(checkFriend)) &&
                  <a className="button is-rounded is-pulled-right pin-button" onClick={this.handleSubmit}>
                    <span className="icon">
                      <i className="fas fa-user-friends"></i>
                    </span>
                    <span>Request Friend</span>
                  </a>
                  }
                </div>
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-4">
                <div className="extra-padding has-background-white curve-border">
                  <figure className="image">
                    <img src={user.image} alt={user.username} />
                  </figure>
                  <br />
                  <h4 className="title is-3">{user.name}</h4>
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
              </div>
              <div className="column is-4 has-text-centered">
                <div className="extra-padding has-background-white curve-border">
                  <h4 className="title is-3">Reviews</h4>
                  {user.reviews && user.reviews.map((review, i) => (
                    <Link key={i} to={`/review/${review._id}`}><span className="title is-6">{review.restaurantName}</span><br />“{review.reviewHeadline}”<br />{[...Array(review.rating)].map((e, i) => <span key={i}><i className="fas fa-star"></i></span>)}<br /><br /></Link>))}
                </div>
              </div>
              <div className="column is-4 has-text-centered">
                <div className="extra-padding has-background-white curve-border">
                  <h4 className="title is-3">Recipes</h4>
                  {user.recipes && user.recipes.map((recipe, i) => (
                    <Link key={i} to={`/recipe/${recipe._id}`}><span className="title is-6">{recipe.name}</span><br />“{recipe.description}”<br /><br /></Link>))}
                </div>
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
