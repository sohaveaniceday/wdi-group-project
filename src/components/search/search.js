import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Auth from '../../lib/auth'
const moment = require('moment')


class Search extends React.Component {
  constructor() {
    super()
    this.state = { data: {search: ''} }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
    console.log(this.state.data.search)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ sent: true })
    axios.all([
      // axios.get(`/api/user/${Auth.getPayload().sub}`),
      axios.get('/api/recipes'),
      axios.get('/api/reviews')
    ])
      .then(res => {
        const [ recipes, reviews ] = res
        const searchItem = this.state.data.search.toLowerCase()
        const recipeFeed = recipes.data.filter(recipe => {
          return (recipe.name.toLowerCase().includes(searchItem) || recipe.ingredients.toLowerCase().includes(searchItem) || recipe.categories.some(category => {
            return category.name.toLowerCase().includes(searchItem)
          })
          )
        })
        const reviewFeed = reviews.data.filter(review => {
          return review.restaurantName.toLowerCase().includes(searchItem) || review.categories.some(category => {
            return category.name.toLowerCase().includes(searchItem)
          })
        })
        this.setState({ recipeFeed, reviewFeed })
      })
  }

  render() {
    const { data } = this.state
    // console.log(search)
    console.log(this.state)
    return (
      <main className="section">
        <div className="container margin-maker">
          <form onSubmit={this.handleSubmit}>
            <div className="field has-text-centered">
              <div className="control">
                <input
                  className='input'
                  name="search"
                  placeholder="Search restuarants, recipes, ingredients and categories"
                  onChange={this.handleChange}
                  value={data.search || ''}
                />
              </div>
            </div>
            <div className="has-text-centered">
              <button className="button is-info is-rounded">Search</button>
            </div>
          </form>
          <hr />
          <div className="columns is-mobile is-multiline articles">
            <div className="column is-hidden-mobile"></div>
            <div className="column is-two-fifths-desktop is-two-fifths-tablet is-half-mobile news">
              {this.state.sent && <h2 className="title is-4 is-centered has-text-centered">Reviews for you</h2>}
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
              {this.state.sent && <h2 className="title is-4 is-centered has-text-centered">Recipes for you</h2>}
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

export default Search

// <form onSubmit={this.handleSubmit}>
//   <div className="field">
//     <label className="label">Make Comment</label>
//     <div className="control">
//       <input
//         className={`input ${errors.text ? 'is-danger': ''}`}
//         name="text"
//         placeholder="Comment"
//         onChange={this.handleChange}
//         value={data.text || ''}
//       />
//     </div>
//     {errors.restaurantName && <small className="help is-danger">{errors.restaurantName}</small>}
//   </div>
//   <button className="button is-info">Submit</button>
// </form>
