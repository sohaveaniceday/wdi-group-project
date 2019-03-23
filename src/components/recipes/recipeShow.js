import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


class recipeShow extends React.Component {
  constructor() {
    super()

    this.state = {}

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/recipes/${this.props.match.params.id}`)
      .then(res => this.setState({ recipe: res.data }))
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

  render() {
    console.log(this.state.recipe)
    if(!this.state.recipe) return null
    const { recipe } = this.state
    return(
      <main className="section">
        <div className="container recipe-show">
          <h2 className="title">{recipe.name}</h2>
          <hr />

          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={recipe.image} alt={recipe.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Description</h4>
              <p>{recipe.description}</p>
              <hr />
              <h4 className="title is-4">Ingredients</h4>
              <p>{recipe.ingredients}</p>
              <hr />
              <h4 className="title is-4">Method</h4>
              <p>{recipe.method}</p>
              <br />
              <hr />
              <h4 className="title is-4">Written By</h4>
              <p>{recipe.user.username}</p>
              <br />
              <hr />
              <h4 className="title is-4">Categories</h4>
              <div>{recipe.categories.map(category => (
                <p key={category._id}>{category.name} <br /></p>))}</div>
              <br />
              <hr />
              {this.isOwner() && <Link className="button is-warning" to={`/recipes/${recipe._id}/edit`}>Edit</Link>}
              {this.isOwner() && <button className="button is-danger" onClick={this.handleDelete}>Delete</button>}
              <br />
              <hr />
              <h4 className="title is-4">Comments</h4>
              <p>{recipe.comments}</p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default recipeShow
