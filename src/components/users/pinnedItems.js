import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

const moment = require('moment')


class PinnedItems extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    axios.all([
      axios.get(`/api/user/${Auth.getPayload().sub}`),
      axios.get('/api/recipes'),
      axios.get('/api/reviews')
    ])
      .then(res => {
        const [ user, recipes, reviews ] = res
        console.log(user, recipes, reviews)
        console.log(user.data.user.pinnedReviews)
        // console.log(res)
        const recipeFeed = recipes.data.filter(recipe => {
          return (user.data.user.pinnedRecipes.some(pinnedRecipe => {
            return recipe._id.includes(pinnedRecipe)
          }))
        })
        const reviewFeed = reviews.data.filter(review => {
          return (user.data.user.pinnedReviews.some(pinnedReview => {
            return review._id.includes(pinnedReview)
          }))
        })
        this.setState({ recipeFeed, reviewFeed, user })
      })
  }

  render() {
    // console.log(this.state.recipeFeed)
    return (
      <main className="section">
        <div className="container margin-maker">
          <div className="columns is-mobile is-multiline articles">
            <div className="column is-hidden-mobile"></div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              <h2 className="title is-4 is-centered has-text-centered">Reviews for you</h2>
              {this.state.reviewFeed && this.state.reviewFeed.map(reviewFeed => (
                <div key={reviewFeed._id} className="column">
                  <Link to={`/review/${reviewFeed._id}`} >
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-header-title">{reviewFeed.restaurantName}</h4>
                      </div>
                      <div className="card-image">
                        <figure className="image">
                          <img src={reviewFeed.image} alt={reviewFeed.restaurantName} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h5 className="title is-6">“{reviewFeed.reviewHeadline}“</h5>
                        <h6 className="subtitle is-6">Created by <Link to={`/user/${reviewFeed.user._id}`}>{reviewFeed.user.username}</Link><br /> at {moment(reviewFeed.createdAt).format('hh:mm')} on {moment(reviewFeed.createdAt).format('Do MMMM YYYY')}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              <h2 className="title is-4 is-centered has-text-centered">Recipes for you</h2>
              {this.state.recipeFeed && this.state.recipeFeed.map(recipeFeed => (
                <div key={recipeFeed._id} className="column">
                  <Link to={`/recipe/${recipeFeed._id}`} >
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-header-title">{recipeFeed.name}</h4>
                      </div>
                      <div className="card-image">
                        <figure className="image">
                          <img src={recipeFeed.image} alt={recipeFeed.name} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h5 className="title is-6">“{recipeFeed.description}“</h5>
                        <h6 className="subtitle is-6">Created by <Link to={`/user/${recipeFeed.user._id}`}>{recipeFeed.user.username}</Link><br /> at {moment(recipeFeed.createdAt).format('hh:mm')} on {moment(recipeFeed.createdAt).format('Do MMMM YYYY')}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="column is-hidden-mobile"></div>
          </div>
        </div>
      </main>
    )
  }
}
export default PinnedItems
