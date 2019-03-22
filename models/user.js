//Munch is awesome.
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  categories: [ {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true
  } ],
  image: { type: String },
  location: { type: String },
  bio: { type: String }
})

userSchema.plugin(require('mongoose-unique-validator'))

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    return json
  }
})

userSchema.virtual('reviews', {
  ref: 'Reviews',
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('recipes', {
  ref: 'Recipes',
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
