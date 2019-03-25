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

module.exports = {
  show: showRoute
}
