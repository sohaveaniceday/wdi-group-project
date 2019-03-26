import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


class reviewShow extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  render() {
    console.log(this.state.review)
    if(!this.state.review) return null
    const { review, data, errors } = this.state
    return(
      <main className="section">
        <div className="container margin-maker">
          <h2 className="title">{review.restaurantName}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={review.image} alt={review.restaurantName} />
              </figure>
            </div>
            <div className="column is-half">
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
