//Munch needs authentication.
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '4h' })
      res.json({
        message: `Thanks for registering ${user.username}. Welcome to the table!`,
        token,
        user
      })
    })
    .catch(next)
}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized'})
      }

      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '4h' })
      res.json({
        message: `Welcome back ${user.username}! What are you craving?`,
        token,
        user
      })
    })
    .catch(next)
}

module.exports = {
  register,
  login
}
