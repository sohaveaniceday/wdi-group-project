import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import ReviewForm from './reviewForm'

class ReviewEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {}, categories: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then(res => {
        return res.data.map(category => ({ value: category._id, label: category.name }))
      })
      .then(categories => this.setState({ categories }))
      .catch(err => console.log(err))
    axios.get(`/api/reviews/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.message))

  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/reviews/${this.props.match.params.id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/newsfeed'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleSelect(value) {
    let data = null
    if (this.state.data.categories) {
      data = {...this.state.data, categories: value.map(({ value }) => value) }
    } else {
      data = {...this.state.data, categories: [value.value] }
    }
    this.setState({ data })
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <ReviewForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
            categories={this.state.categories}
            data={this.state.data}
            errors={this.state.errors}
          />
        </div>
      </main>
    )
  }
}

export default ReviewEdit
