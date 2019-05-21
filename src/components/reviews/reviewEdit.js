import React from 'react'
import axios from 'axios'
import * as filestack from 'filestack-js'
import Auth from '../../lib/auth'
import ReviewForm from './reviewForm'

const client = filestack.init('AYoVZLJZuQ2GNd6qd87SYz')

class ReviewEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {}, categories: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.updateState = this.updateState.bind(this)
    this.openModal = this.openModal.bind(this)
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
    const data = {...this.state.data, image: this.state.image}
    axios.put(`/api/reviews/${this.props.match.params.id}`, data,
      // this.state.data
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

  openModal() {
    const options = {
      fromSources: ['local_file_system','instagram','facebook'],
      accept: ['image/*'],
      transformations: {
        crop: true,
        circle: true,
        rotate: true
      },
      onFileUploadFinished: (file) => {
        this.setState({ image: file.url })
      },
      onFileUploadFailed: (file, error) => {
        console.log("file", file);
        console.log("error", error);
      }
    }
    client.picker(options).open()
  }

  updateState(url){
    console.log('updateState running')
    console.log(url)
  }

  render() {
    return (
      <main className="section review-page">
        <div className="container">
          <ReviewForm
            updateState={this.updateState}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
            categories={this.state.categories}
            data={this.state.data}
            errors={this.state.errors}
            openModal={this.openModal}
            image={this.state.image}
          />
        </div>
      </main>
    )
  }
}

export default ReviewEdit
