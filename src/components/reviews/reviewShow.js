import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

let reviewId = null

function checkPin(value) {
  console.log(value)
  if (value === reviewId) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

class reviewShow extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {}, user: {} }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/reviews/${this.props.match.params.id}`)
      .then(res => this.setState({ review: res.data }))
    axios.get(`/api/user/${Auth.getPayload().sub}`)
      .then(res => this.setState({ data: res.data.user }))
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

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
    console.log(this.state.data)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`/api/reviews/${this.props.match.params.id}/comments`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        if (res.data.errors) {
          this.setState({ sent: 'false' })
        } else {
          document.location.reload(true)
          this.setState({ sent: 'true', data: {} })
        }
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleClick(value, review) {
    let data = null
    data = {...this.state.data, pinnedReviews: review.concat(value) }
    this.setState({ data }, function() {
      axios.put(`/api/user/${Auth.getPayload().sub}`,
        this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
        .then((res) => {
          if (res.data.errors) {
            this.setState({ sent: 'false' })
          } else {
            this.setState({ sent: 'true' })
          }
        })
        .catch(err => this.setState({ errors: err.response.data.errors }))
    })
  }

  render() {
    reviewId = this.props.match.params.id
    if(!this.state.review) return null
    const { review, data, errors } = this.state
    const { pinnedReviews } = this.state.data
    return(
      <main className="section">
        <div className="container margin-maker">
          <div className="columns">
            <div className="column is-half">
              <h2 className="title">{review.restaurantName}</h2>
            </div>
            <div className="column is-half">
              {pinnedReviews && pinnedReviews.some(checkPin) &&
            <button className="button is-info is-rounded is-pulled-right">
            Pinned
            </button>
              }
              {pinnedReviews && !pinnedReviews.some(checkPin) &&
              <button onClick={() => this.handleClick(pinnedReviews, [review._id])} className="button is-info is-rounded is-pulled-right">
            Pin Review
              </button>
              }
            </div>
          </div>
          <hr />
          <div className="columns">
            <div className="column is-one-third">
              <figure className="image">
                <img src={review.image} alt={review.restaurantName} />
              </figure>
            </div>
            <div className="column is-two-thirds">
              <h4 className="title is-4">Written By</h4>
              <Link to={`/user/${review.user._id}`} >
                <p>{review.user.username}</p>
              </Link>
              <hr />
              <h4 className="title is-4">Rating: {review.rating} Stars</h4>
              <hr />
              <h4 className="title is-4">Review Headline</h4>
              <p>{review.reviewHeadline}</p>
              <hr />
              <h4 className="title is-4">Review</h4>
              <p>{review.reviewText}</p>
              <hr />
              <h4 className="title is-4">Categories</h4>
              <div>{review.categories.map((category, i) => (
                <span key={i}>{category.name}, </span>))}</div>
              {this.isOwner() && <div><hr /></div>}
              {this.isOwner() && <Link className="button is-warning" to={`/review/${review._id}/edit`}>Edit</Link>}
              {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
              <br />
              <hr />
              <h4 className="title is-4">Comments</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Make Comment</label>
                  <div className="control">
                    <input
                      className={`input ${errors.text ? 'is-danger': ''}`}
                      name="text"
                      placeholder="Comment"
                      onChange={this.handleChange}
                      value={data.text || ''}
                    />
                  </div>
                  {errors.restaurantName && <small className="help is-danger">{errors.restaurantName}</small>}
                </div>
                <button className="button is-info">Submit</button>
              </form>
              <br />
              <div>{review.comments.map((comment, i) => (
                <div key={i}><p>{comment.text}</p><p><strong>Written by {comment.user.username}</strong></p><hr /></div>))}</div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default reviewShow

// <p>{review.categories}</p>

// {(this.state.data.friends.some(checkFriend)) && checkPending(this.state.data.friends) &&
// <button className="button is-info is-rounded is-pulled-right">
// Requested
// </button>
// }
// {(this.state.data.friends.some(checkFriend)) && checkAccepted(this.state.data.friends) &&
// <button className="button is-info is-rounded is-pulled-right">
// Friends
// </button>
// }
// {(this.state.data.friends.some(checkFriend)) && checkRequested(this.state.data.friends) &&
// <button onClick={this.handleSubmit} className="button is-info is-rounded is-pulled-right">
// Accept Request
// </button>
// }
// {(!this.state.data.friends.some(checkFriend)) &&
// <button onClick={this.handleSubmit} className="button is-info is-rounded is-pulled-right">
// Request Friend
// </button>
// }

// {(this.state.data.friends.some(checkFriend)) && checkRequested(this.state.data.friends) &&
// <button onClick={this.handleSubmit} className="button is-info is-rounded is-pulled-right">
// Accept Request
// </button>
// }
