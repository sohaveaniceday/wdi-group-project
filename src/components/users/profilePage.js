import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class ProfilePage extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/user/${Auth.getPayload().sub}`)
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state.data.user)
    if(!this.state.data) return null
    const { user } = this.state.data
    console.log(user)
    if (user) {
      return(
        user && <main className="section">
          <div className="container margin-maker">
            <div className="columns">
              <div className="column is-half">
                <h2 className="title">Hello {user.username}!</h2>
              </div>
              <div className="column is-half">
                <Link className="button is-warning is-pulled-right" to={`/user/${user._id}/edit`}>Edit Profile</Link>
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
              <div className="column is-full has-text-centered">
                <h4 className="title is-4">Categories</h4>
                {user.categories && <p>{user.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}
                </p>}
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
export default ProfilePage

// <Link className="button is-warning" to={`/reviews/${review._id}/edit`}>Edit</Link>}
//
// <div>
// <h4 className="title is-4">Reviews</h4>
// {data.reviews && <div>{data.reviews.map((review, i) => (
//   <p key={i}><strong>{review.restaurantName}</strong> <br />{review.restaurantHeadline}</p>))}
// <hr />
// </div>
