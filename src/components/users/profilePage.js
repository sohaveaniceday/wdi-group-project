import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'


function filterRequested(friendsArray) {
  return friendsArray.filter(friend => friend.status === 'requested')
}

function filterAccepted(friendsArray) {
  return friendsArray.filter(friend => friend.status === 'accepted')
}

function filterPending(friendsArray) {
  return friendsArray.filter(friend => friend.status === 'pending')
}


class ProfilePage extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/user/${Auth.getPayload().sub}`)
      .then(res => this.setState({ data: res.data }))
  }

  handleSubmit(id) {
    // e.preventDefault()
    // console.log(e.target.value)
    axios.post('/api/friends',
      id,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        console.log(res)
        document.location.reload(true)
        // this.forceUpdate()
      })
      .catch(err => {
        console.log(err)
        this.setState({ errors: err.response.data.errors })
      })
  }

  render() {
    console.log(this.state)
    if(!this.state.data) return null
    const { user } = this.state.data
    const { friends } = this.state.data
    // console.log(friends)
    if (user) {
      return(
        user && <main className="section profile-page hero is-fullheight">
          <div className="container margin-maker">
            <div className="extra-padding has-background-white margin-topbottom curve-border">
              <div className="columns">
                <div className="column is-6">
                  <h2 className="title">Hello {user.username}!</h2>
                </div>
                <div className="column is-6 edit-column">
                  <a className="button is-rounded pin-button is-pulled-right edit-button" href={`/user/${user._id}/edit`}>
                    <span className="icon">
                      <i className="fas fa-edit"></i>
                    </span>
                    <span>Edit Profile</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <div className="extra-padding has-background-white curve-border">
                  {user.image && <><figure className="image">
                    <img src={user.image} alt={user.username} className="curve-border"/>
                  </figure>
                  <br /></>}
                  <h4 className="title is-3">{user.name}</h4>
                  <hr />
                  {(friends.some(friend => friend.status === 'pending')) && <h4 className="title is-6">Pending Friend Requests</h4>}
                  {friends && filterPending(friends).map((friend, i) => (
                    <div key={i}><span><Link to={`/user/${friend._id}`}>{friend.friend.name}  </Link><button className="button is-small is-rounded pin-button" onClick={() => this.handleSubmit(friend.friend)}>
                  Accept
                    </button><br /></span></div>))}
                  {(friends.some(friend => friend.status === 'pending')) && <hr />}
                  {(friends.some(friend => friend.status === 'accepted')) && <h4 className="title is-6">Friends</h4>}
                  {friends && filterAccepted(friends).map((friend, i) => (
                    <div key={i}><Link to={`/user/${friend._id}`}>{friend.friend.name}<br /></Link></div>))}
                  {(friends.some(friend => friend.status === 'accepted')) && <div><hr /></div>}
                  {(friends.some(friend => friend.status === 'requested')) && <h4 className="title is-6">Requested Friends</h4>}
                  {friends && filterRequested(friends).map((friend, i) => (
                    <div key={i}><Link to={`/user/${friend._id}`}>{friend.friend.name}<br /></Link></div>))}
                  {(friends.some(friend => friend.status === 'requested')) && <div><hr /></div>}
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
              <div className="column is-one-third has-text-centered">
                <div className="extra-padding has-background-white curve-border">
                  <h4 className="title is-3">Reviews</h4>
                  {user.reviews && user.reviews.map((review, i) => (
                    <Link key={i} to={`/review/${review._id}`}><span className="title is-6">{review.restaurantName}</span><br />“{review.reviewHeadline}”<br />{[...Array(review.rating)].map((e, i) => <span key={i}><i className="fas fa-star"></i></span>)}<br /><br /></Link>))}
                  {!(user.reviews.length > 0) && <span><Link to="/review/new" className="button pin-button is-rounded">Create a Review</Link></span>}
                </div>
              </div>
              <div className="column is-one-third has-text-centered">
                <div className="extra-padding has-background-white curve-border">
                  <h4 className="title is-3">Recipes</h4>
                  {user.recipes && user.recipes.map((recipe, i) => (
                    <Link key={i} to={`/recipe/${recipe._id}`}><span className="title is-6">{recipe.name}</span><br />“{recipe.description}”<br /><br /></Link>))}
                  {!(user.recipes.length > 0) && <Link to="/recipe/new" className="button pin-button is-rounded">Create a Recipe</Link>}
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

export default ProfilePage

// <Link className="button is-warning" to={`/reviews/${review._id}/edit`}>Edit</Link>}
//
// <div>
// <h4 className="title is-4">Reviews</h4>
// {data.reviews && <div>{data.reviews.map((review, i) => (
//   <p key={i}><strong>{review.restaurantName}</strong> <br />{review.restaurantHeadline}</p>))}
// <hr />
// </div>
