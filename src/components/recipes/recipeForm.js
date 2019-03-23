import React from 'react'

const RecipeForm = ({ handleChange, handleSubmit, data, errors }) => {
  return (
    <div className="recipe-form">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className={`input ${errors.name ? 'is-danger': ''}`}
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={data.name || ''}
            />
          </div>
          {errors.name && <small className="help is-danger">{errors.name}</small>}
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input
              className={`input ${errors.description ? 'is-danger': ''}`}
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={data.description || ''}
            />
          </div>
          {errors.description && <small className="help is-danger">{errors.description}</small>}
        </div>
        <div className="field">
          <label className="label">Ingredients</label>
          <div className="control">
            <input
              className={`input ${errors.ingredients ? 'is-danger': ''}`}
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={data.ingredients || ''}
            />
          </div>
          {errors.ingredients && <small className="help is-danger">{errors.ingredients}</small>}
        </div>
        <div className="field">
          <label className="label">Method</label>
          <div className="control">
            <input
              className={`input ${errors.method ? 'is-danger': ''}`}
              name="method"
              placeholder="Method"
              onChange={handleChange}
              value={data.method || ''}
            />
          </div>
          {errors.method && <small className="help is-danger">{errors.method}</small>}
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <textarea
              className={`input ${errors.image ? 'is-danger': ''}`}
              placeholder="Image"
              name="image"
              onChange={handleChange}
              value={data.image || ''}
            />
          </div>
          {errors.image && <small className="help is-danger">{errors.image}</small>}
        </div>
        <button className="button is-info">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
