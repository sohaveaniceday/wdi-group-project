//Munch is dope.
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String },
  createdAt: { type: Date, default: Date.now }
})

const reviewSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  reviewText: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  image: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  categories: [ { type: mongoose.Schema.ObjectId, ref: 'Category' } ],
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Review', reviewSchema)

// add in reference to external api as mvp+
