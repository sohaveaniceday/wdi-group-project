//Munch is dope.
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
})

const reviewSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  reviewHeadline: { type: String },
  reviewText: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  image: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  categories: [{ type: mongoose.Schema.ObjectId, ref: 'Category', required: true, default: undefined }],
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Review', reviewSchema)

// add in reference to external api as mvp+
