//So many recipes not enough time.
const Recipe = require('../models/recipe')

function indexRoute(req, res) {
  return Recipe
    .find(req.query)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.json(err))
}

function createRoute(req,res) {
  return Recipe
    .create(req.body)
    .then(recipe => res.status(201).json(recipe))
    .catch(err => res.json(err))
}

function showRoute(req, res) {
  return Recipe
    .findById(req.params.id)
    .then(recipe=> {
      if (!recipe) return res.status(404).json({ message: 'Not Found'})
      res.status(200).json(recipe)
    })
    .catch(err => res.json(err))
}

function editRoute(req,res) {
  return Recipe
    .findById(req.params.id)
    .then(recipe => {
      if (!recipe) return res.status(404).json({ message: 'Not Found'})
      Object.assign(recipe, req.body)
      return recipe.save()
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.json(err))
}

function deleteRoute(req, res) {
  return Recipe
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(202).end('OK'))
    .catch(err => res.status(404).json(err))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  delete: deleteRoute
}
