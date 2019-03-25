import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
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
        const recipeFeed = recipes.data.filter(recipe => {
          return user.data.categories.some(category => {
            return recipe.categories.includes(category._id)
          })
        })
        const reviewFeed = reviews.data.filter(review => {
          return user.data.categories.some(category => {
            return review.categories.includes(category._id)
          })
        })
        this.setState({ recipeFeed, reviewFeed, user })
      })
  }
  render() {
    console.log(this.state.recipeFeed)
    return (
      <main className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline articles">
            <div className="column is-hidden-mobile"></div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              <h2 className="title is-4 is-centered">Reviews for you</h2>
              {this.state.reviewFeed && this.state.reviewFeed.map(reviewFeed => (
                <div key={reviewFeed._id} className="column">
                  <Link to={`/reviews/${reviewFeed._id}`} >
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
                        <h5 className="title is-6">{reviewFeed.reviewHeadline}</h5>
                        <h6 className="subtitle is-6">{reviewFeed.user.username}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              <h2 className="title is-4 is-centered">Recipes for you</h2>
              {this.state.recipeFeed && this.state.recipeFeed.map(recipeFeed => (
                <div key={recipeFeed._id} className="column">
                  <Link to={`/recipes/${recipeFeed._id}`} >
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
                        <h5 className="title is-6">{recipeFeed.description}</h5>
                        <h6 className="subtitle is-6">{recipeFeed.user.username}</h6>
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
