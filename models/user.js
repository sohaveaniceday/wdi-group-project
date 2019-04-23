//Munch is awesome.
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const bcrypt = require('bcrypt')
const friendsPlugin = require('mongoose-friends-plugin')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  categories: [ {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true
  } ],
  image: { type: String },
  location: { type: String },
  bio: { type: String },
  pinnedRecipes: [ {
    type: mongoose.Schema.ObjectId,
    ref: 'Recipe'
  } ],
  pinnedReviews: [ {
    type: mongoose.Schema.ObjectId,
    ref: 'Review',
    required: true
  } ]
})

userSchema.plugin(friendsPlugin({ pathName: 'friends' }))

userSchema.plugin(require('mongoose-unique-validator'))


userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    return json
  }
})

userSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('recipes', {
  ref: 'Recipe',
  localField: '_id',
  foreignField: 'user'
})

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('Password Confirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

module.exports = mongoose.model('User', userSchema)

// review and recipes as virtuals

// add shopping list as an mvp+
