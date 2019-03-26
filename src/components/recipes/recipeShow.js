import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

let recipeId = null

function checkPin(value) {
  console.log(value)
  if (value === recipeId) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

class recipeShow extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {}, user: {} }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/recipes/${this.props.match.params.id}`)
      .then(res => this.setState({ recipe: res.data }))
    axios.get(`/api/user/${Auth.getPayload().sub}`)
      .then(res => this.setState({ data: res.data.user }))
  }


  handleDelete() {
    axios.delete(`/api/recipes/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/newsfeed'))
      .catch(err => console.log(err.message))
  }

  isOwner() {
    return Auth.isAuthenticated() && this.state.recipe.user._id === Auth.getPayload().sub
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: null }
    this.setState({ data, errors })
    console.log(this.state.data)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post(`/api/recipes/${this.props.match.params.id}/comments`,
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

  handleClick(value, recipe) {
    let data = null
    data = {...this.state.data, pinnedRecipes: recipe.concat(value) }
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
    if(!this.state.recipe) return null
    const { recipe, data, errors } = this.state
    recipeId = this.props.match.params.id
    const { pinnedRecipes } = this.state.data
    return(
      <main className="section">
        <div className="container margin-maker">
          <div className="columns">
            <div className="column is-half">
              <h2 className="title">{recipe.name}</h2>
            </div>
            <div className="column is-half">
              {pinnedRecipes && pinnedRecipes.some(checkPin) &&
          <button className="button is-info is-rounded is-pulled-right">
          Pinned
          </button>
              }
              {pinnedRecipes && !pinnedRecipes.some(checkPin) &&
            <button onClick={() => this.handleClick(pinnedRecipes, [recipe._id])} className="button is-info is-rounded is-pulled-right">
          Pin Recipe
            </button>
              }
            </div>
          </div>
          <hr />

          <div className="columns">
            <div className="column is-one-third">
              <figure className="image">
                <img src={recipe.image} alt={recipe.name} />
              </figure>
            </div>
            <div className="column is-two-thirds">
              <h4 className="title is-4">Written By</h4>
              <Link to={`/user/${recipe.user._id}`} >
                <p>{recipe.user.username}</p>
              </Link>
              <hr />
              <h4 className="title is-4">Description</h4>
              <p>{recipe.description}</p>
              <hr />
              <h4 className="title is-4">Ingredients</h4>
              <p>{recipe.ingredients}</p>
              <hr />
              <h4 className="title is-4">Method</h4>
              <p>{recipe.method}</p>
              <hr />
              <h4 className="title is-4">Categories</h4>
              <div>{recipe.categories.map((category, i) => (
                <span key={i}>{category.name}, </span>))}</div>
              {this.isOwner() && <div><br /><hr /></div>}
              {this.isOwner() && <Link className="button is-warning" to={`/recipe/${recipe._id}/edit`}>Edit</Link>}
              {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
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
              <div>{recipe.comments.map((comment, i) => (
                <div key={i}><p>{comment.text}</p><p><strong>Written by {comment.user.username}</strong></p><hr /></div>))}</div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default recipeShow
