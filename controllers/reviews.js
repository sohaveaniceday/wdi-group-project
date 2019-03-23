//Munch has the best reviews.
const Review = require('../models/review')

function indexRoute(req, res) {
  return Review
    .find(req.query)
    .then(review => res.status(200).json(review))
    .catch(err => res.json(err))
}

function createRoute(req,res) {
  req.body.user = req.currentUser
  return Review
    .create(req.body)
    .then(review => res.status(201).json(review))
    .catch(err => res.json(err))
}

function showRoute(req, res) {
  return Review
    .findById(req.params.id)
    .populate('user')
    .populate('categories')
    .then(review=> {
      if (!review) return res.status(404).json({ message: 'Not Found'})
      res.status(200).json(review)
    })
    .catch(err => res.json(err))
}

function editRoute(req, res) {
  return Review
    .findById(req.params.id)
    .then(review => {
      if (!review) return res.status(404).json({ message: 'Not Found'})
      Object.assign(review, req.body)
      return review.save()
    })
    .then(review => res.status(200).json(review))
    .catch(err => res.json(err))
}

function deleteRoute(req, res) {
  return Review
    .findByIdAndRemove(req.params.id)
    .then(() => res.status(202).end('OK'))
    .catch(err => res.status(404).json(err))
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Review
    .findById(req.params.id)
    .then(review => {
      review.comments.push(req.body)
      return review.save()
    })
    .then(review => res.json(review))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  Review
    .findById(req.params.id)
    .then(review => {
      const comment = review.comments.id(req.params.commentId)
      comment.remove()
      return review.save()
    })
    .then(review => res.json(review))
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
