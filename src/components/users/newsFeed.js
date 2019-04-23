import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
const moment = require('moment')


class Newsfeed extends React.Component {
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
        console.log('hello',res)
        const recipeFeed = recipes.data.filter(recipe => {
          return ((user.data.friends.some(friend => {
            return (recipe.user.id.includes(friend._id) && friend.status !== 'pending')
          })) || user.data.user.categories.some(category => {
            return recipe.categories.some(categoryObject => {
              return Object.values(categoryObject).includes(category._id)
            })
          }) && recipe.user.id !== Auth.getPayload().sub)
        })
        const reviewFeed = reviews.data.filter(review => {
          return ((user.data.friends.some(friend => {
            return (review.user.id.includes(friend._id) && friend.status !== 'pending')
          })) || user.data.user.categories.some(category => {
            return review.categories.some(categoryObject => {
              return Object.values(categoryObject).includes(category._id)
            })
          }) && review.user.id !== Auth.getPayload().sub)
        })
        this.setState({ recipeFeed, reviewFeed, user })
      })
  }

  render() {
    // console.log(this.state.recipeFeed)
    return (
      <main className="section news-feed hero is-fullheight">
        <div className="container margin-maker margin-auto">
          <div className="columns is-mobile is-multiline articles">
            <div className="column is-hidden-mobile"></div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              <div className="extra-padding has-background-white margin-topbottom curve-border">
                <h2 className="title is-4 is-centered has-text-centered">Reviews for you</h2>
              </div>
              {this.state.reviewFeed && this.state.reviewFeed.map(reviewFeed => (
                <div key={reviewFeed._id} className="column">
                  <Link to={`/review/${reviewFeed._id}`} >
                    <div className="card">
                      <div className="card-header is-shadowless">
                        <h4 className="card-header-title custom-title is-centered">{reviewFeed.restaurantName}</h4>
                      </div>
                      <div className="card-image is-4by3">
                        <figure className="image">
                          <img className="extra-padding" src={reviewFeed.image} alt={reviewFeed.restaurantName} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h5 className="title is-6 small-margin-bottom">“{reviewFeed.reviewHeadline}“</h5>
                        <h6 className="subtitle is-6 has-text-right top-margin">Created by <Link to={`/user/${reviewFeed.user._id}`}>{reviewFeed.user.username}</Link><br /> at {moment(reviewFeed.createdAt).format('hh:mm')} on {moment(reviewFeed.createdAt).format('Do MMMM YYYY')}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              <div className="extra-padding has-background-white margin-topbottom curve-border">
                <h2 className="title is-4 is-centered has-text-centered">Recipes for you</h2>
              </div>
              {this.state.recipeFeed && this.state.recipeFeed.map(recipeFeed => (
                <div key={recipeFeed._id} className="column">
                  <Link to={`/recipe/${recipeFeed._id}`} >
                    <div className="card">
                      <div className="card-header is-shadowless has-text-centered">
                        <h4 className="card-header-title custom-title is-centered">{recipeFeed.name}</h4>
                      </div>
                      <div className="card-image is-4by3">
                        <figure className="image">
                          <img className="extra-padding" src={recipeFeed.image} alt={recipeFeed.name} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h5 className="title is-6 .small-margin-bottom">“{recipeFeed.description}“</h5>
                        <h6 className="subtitle is-6 has-text-right top-margin">Created by <Link to={`/user/${recipeFeed.user._id}`}>{recipeFeed.user.username}</Link><br /> at {moment(recipeFeed.createdAt).format('hh:mm')} on {moment(recipeFeed.createdAt).format('Do MMMM YYYY')}</h6>
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
export default Newsfeed
