import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import RecipeForm from './recipeForm'

import * as filestack from 'filestack-js'

const client = filestack.init('AYoVZLJZuQ2GNd6qd87SYz')

class RecipeNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

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
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {...this.state.data, image: this.state.image}
    if (this.state.data.categories && this.state.data.categories.length > 0) {
      axios.post('/api/recipes',
        data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
        .then((res) => {
          if (res.data.errors) {
            this.setState({ sent: 'false' })
          } else {
            this.setState({ sent: 'true', data: {} })
          }
        })
        .then(() => this.props.history.push('/newsfeed'))
        .catch(err => this.setState({ errors: err.response.data.errors }))
    }
  }

  handleSelect(value) {
    let data = null
    data = {...this.state.data, categories: value.map(({ value }) => value) }
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
        console.log('file', file)
        console.log('error', error)
      }
    }
    client.picker(options).open()
  }

  updateState(url){
    console.log('updateState running')
    console.log(url)
  }

  render() {
    console.log(this.state)
    return (
      <main className="section recipe-page">
        <div className="container">
          <RecipeForm
            updateState={this.updateState}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
            data={this.state.data}
            categories={this.state.categories}
            errors={this.state.errors}
            openModal={this.openModal}
            image={this.image}
          />
        </div>
      </main>
    )
  }
}

export default RecipeNew
