import React from 'react'
import Select from 'react-select'

const RecipeForm = ({ handleChange, handleSubmit, handleSelect, data, errors, categories }) => {
  return (
    <div className="recipe-form">
      <h1 className="title is-2">Recipe Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name (required)</label>
          <div className="control">
            <input
              className={`input is-rounded ${errors.name ? 'is-danger': ''}`}
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
              className={`input is-rounded ${errors.description ? 'is-danger': ''}`}
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
              className={`input is-rounded ${errors.ingredients ? 'is-danger': ''}`}
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
              className={`input is-rounded ${errors.method ? 'is-danger': ''}`}
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
              className={`input is-rounded ${errors.image ? 'is-danger': ''}`}
              placeholder="Image"
              name="image"
              onChange={handleChange}
              value={data.image || ''}
            />
          </div>
          {errors.image && <small className="help is-danger">{errors.image}</small>}
        </div>
        <div className="field">
          <label className="label">Categories (required)</label>
          <div>
            <Select
              options={categories}
              onChange={handleSelect}
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
        <button className="button is-info is-rounded">Submit</button>
      </form>
    </div>
  )
}

export default RecipeForm
