const User = require('../models/user')

function showRoute(req, res) {
  return User
    .findById(req.params.id)
    .populate('categories recipes reviews')
    // .populate('recipes')
    .then(review=> {
      if (!review) return res.status(404).json({ message: 'Not Found'})
      res.status(200).json(review)
    })
    .catch(err => res.json(err))
}

function editRoute(req, res) {
  return User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found'})
      Object.assign(user, req.body)
      return user.save()
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.json(err))
}

module.exports = {
  show: showRoute,
  edit: editRoute
}
