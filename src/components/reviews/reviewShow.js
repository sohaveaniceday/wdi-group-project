import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const moment = require('moment')

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

let userId = null

function checkLikes(value) {
  console.log('check like value', value)
  if (value === userId) {
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
    this.handleLike = this.handleLike.bind(this)
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

  handleLike(value, user) {
    let review = null
    review = {...this.state.review, likes: value.concat(user) }
    this.setState({ review }, function() {
      console.log('review state -->', this.state.review)
      axios.put(`/api/reviews/${this.props.match.params.id}`,
        this.state.review,
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

    if(!this.state.user) return null
    userId = Auth.getPayload().sub
    const { likes } = this.state.review

    return(
      <main className="section review-page">
        <div className="container margin-maker">
          <div className="columns is-vcentered has-background-white margin-topbottom curve-border">
            <div className="column is-half">
              <h2 className="custom-title">{review.restaurantName}<br /></h2>Created by <Link to={`/user/${review.user._id}`}>{review.user.username}</Link> on {moment(review.createdAt).format('Do MMMM YYYY')} at {moment(review.createdAt).format('hh:mm')}
              {likes && likes.some(checkLikes) &&
                <div><a className="button is-link is-rounded is-small">
                  <span className="icon">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>Liked</span>
                </a><label className="label totalLikes like-info">{this.state.review.likes.length} Likes</label></div>
              }
              {likes && !likes.some(checkLikes) &&
                    <div><a className="button is-link is-rounded is-small" onClick={() => this.handleLike(likes, Auth.getPayload().sub)}>
                      <span className="icon">
                        <i className="fas fa-thumbs-up"></i>
                      </span>
                      <span>Like</span>
                    </a><label className="label totalLikes like-info">{this.state.review.likes.length} Likes</label></div>
              }
            </div>
            <div className="column is-half pin-column">
              {pinnedReviews && pinnedReviews.some(checkPin) &&
              <a className="button is-rounded is-pulled-right pin-button">
                <span className="icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span>Pinned</span>
              </a>
              }
              {pinnedReviews && !pinnedReviews.some(checkPin) &&
              <a className="button is-rounded is-pulled-right pin-button" onClick={() => this.handleClick(pinnedReviews, [review._id])}>
                <span className="icon">
                  <i className="fas fa-thumbtack"></i>
                </span>
                <span>Pin</span>
              </a>
              }
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <div className="extra-padding has-background-white curve-border">
                <figure className="image">
                  <img src={review.image} alt={review.restaurantName} />
                </figure>
                <br/>
                <h4 className="title is-4">Categories</h4>
                <div>{review.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}</div>
              </div>
            </div>
            <div className="column is-two-thirds">
              <div className="extra-padding has-background-white curve-border">
                <h4 className="title is-3">Review</h4>
                <h4 className="title is-4">{[...Array(review.rating)].map((e, i) => <span key={i}><i className="fas fa-star"></i></span>)}</h4>
                <p className="title is-6">“{review.reviewHeadline}”</p>
                <p>{review.reviewText}</p>
                {this.isOwner() && <div><hr /></div>}
                {this.isOwner() && <a className="button is-warning is-rounded" href={`/review/${review._id}/edit`}>
                  <span className="icon">
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                  <span>Edit</span>
                </a>}
                {this.isOwner() && <a className="button is-danger is-rounded" onClick={this.handleDelete}>
                  <span className="icon">
                    <i className="fas fa-trash-alt"></i>
                  </span>
                  <span>Delete</span>
                </a>}
              </div>
            </div>
            <div className="column is-full">
              <div className="extra-padding has-background-white curve-border">
                <h4 className="title is-4">Comments</h4>
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Make Comment</label>
                    <div className="control">
                      <textarea cols='60' rows='3'
                        className={`textarea text-top is-rounded ${errors.text ? 'is-danger': ''}`}
                        name="text"
                        placeholder="Comment"
                        onChange={this.handleChange}
                        value={data.text || ''}
                      />
                    </div>
                    {errors.restaurantName && <small className="help is-danger">{errors.restaurantName}</small>}
                  </div>
                  <button className="button is-info is-rounded">Submit</button>
                </form>
                <div>{review.comments.map((comment, i) => (
                  <div key={i}><hr /><p>{comment.text}</p><p><strong>Written by {comment.user.username}</strong> on {moment(comment.user.createdAt).format('Do MMMM YYYY')} at {moment(comment.user.createdAt).format('hh:mm')}</p></div>))}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default reviewShow
