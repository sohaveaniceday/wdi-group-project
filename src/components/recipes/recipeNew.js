import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import RecipeForm from './recipeForm'

class RecipeNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    // const starring = this.state.data.starring
    // const data = {...this.state.data, starring: ['test']}
    console.log(this.state.data)
    axios.post('/api/recipes',
      this.state.data,
      { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then((res) => {
        console.log(res)
        if (res.data.errors) {
          this.setState({ sent: 'false' })
        } else {
          this.setState({ sent: 'true', data: {} })
          this.props.history.push('/newsfeed')
        }
      })
      .catch(err => {
        this.setState({ errors: err.response.data.errors })
        console.log(err)
      })
  }

  render() {
    console.log(this.state.data)
    return (
      <main className="section">
        <div className="container">
          <RecipeForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state.data}
            errors={this.state.errors}
          />
        </div>
      </main>
    )
  }
}

export default RecipeNew
