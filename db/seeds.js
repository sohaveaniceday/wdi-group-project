//Munch needs food.
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err,db) => {
  db.dropDatabase()

  User.create([
    {
      username: 'Pascual',
      email: 'pascual@ask.com',
      password: '123',
      categories: [ {
        cuisine: 'Thai',
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
      } ],
      image: '_img0012',
      location: 'London',
      bio: 'coolio pascualito'

    }])

    .then(User => console.log(`${User.length} munch created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
