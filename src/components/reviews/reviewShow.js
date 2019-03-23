import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


class reviewShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.props.match.params.id}`)
      .then(res => this.setState({ review: res.data }))
  }


  handleDelete() {
    axios.delete(`/api/reviews/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/newsfeed'))
      .catch(err => console.log(err.message))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.review.user._id === Auth.getPayload().sub
  }

  render() {
    if(!this.state.review) return null
    const { review } = this.state
    return(
      <main className="section">
        <div className="container review-show">
          <h2 className="title">{review.restaurantName}</h2>
          <hr />

          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={review.image} alt={review.restaurantName} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Rating</h4>
              <p>Rating: {review.rating}</p>
              <hr />
              <h4 className="title is-4">Review</h4>
              <p>{review.reviewText}</p>
              <hr />
              <h4 className="title is-4">Written By</h4>
              <p>{review.user.username}</p>
              <br />
              <hr />
              <h4 className="title is-4">Categories</h4>
              <p>{review.categories[0].name}</p>
              <br />
              <hr />
              {this.isOwner() && <Link className="button is-warning" to={`/reviews/${review._id}/edit`}>Edit</Link>}
              {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
              <br />
              <h4 className="title is-4">Comments</h4>
              <p>{review.comments}</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default reviewShow
