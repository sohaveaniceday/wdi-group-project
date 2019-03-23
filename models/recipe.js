//Munch loves cake.
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String },
  createdAt: { type: Date, default: Date.now }
})

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  ingredients: { type: String },
  method: { type: String },
  image: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  categories: [ { type: mongoose.Schema.ObjectId, ref: 'Category' } ],
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Recipe', recipeSchema)
