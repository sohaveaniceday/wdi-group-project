import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import RecipeForm from './recipeForm'

class RecipeEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {}, categories: [] }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/recipes/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.message))
    axios.get('/api/categories')
      .then(res => {
        return res.data.map(category => ({ value: category._id, label: category.name }))
      })
      .then(categories => this.setState({ categories }))
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.put(`/api/recipes/${this.props.match.params.id}`,
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/newsfeed'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleSelect(category) {
    const data = {...this.state.data, categories: [category[0].value] }
    this.setState({ data })
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <RecipeForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleSelect={this.handleSelect}
            data={this.state.data}
            errors={this.state.errors}
          />
        </div>
      </main>
    )
  }
}

export default RecipeEdit
