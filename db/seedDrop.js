const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .finally(() => mongoose.connection.close())
})
