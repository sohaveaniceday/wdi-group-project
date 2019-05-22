//Munch is organic
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/munch'
const secret = process.env.SECRET || 'ssh it\'s a secret'

module.exports = { port, dbURI, secret }
