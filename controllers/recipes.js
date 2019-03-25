//So many recipes not enough time.
const Recipe = require('../models/recipe')

function indexRoute(req, res) {
  return Recipe
    .find(req.query)
    .populate('user')
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.json(err))
}

function createRoute(req,res) {
  req.body.user = req.currentUser
  return Recipe
    .create(req.body)
    .then(recipe => res.status(201).json(recipe))
    .catch(err => res.json(err))
}

function showRoute(req, res) {
  return Recipe
    .findById(req.params.id)
    .populate('user')
    .populate('categories')
    .populate('comments.user')
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

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Recipe
    .findById(req.params.id)
    .then(recipe => {
      recipe.comments.push(req.body)
      return recipe.save()
    })
    .then(recipe => res.json(recipe))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Recipe
    .findById(req.params.id)
    .then(recipe => {
      const comment = recipe.comments.id(req.params.commentId)
      comment.remove()
      return recipe.save()
    })
    .then(recipe => res.json(recipe))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}
