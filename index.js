//Munch is forever.
//requires express
const express = require('express')
//requires mongoose
const mongoose = require('mongoose')
//requires bodyParser
const bodyParser = require('body-parser')
//requires your port number and 
const { dbURI, port } = require('./config/environment')
const router = require('./config/routes')

//declares Express as our 'app'
const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true } )

app.use(express.static(`${__dirname}/dist`))


//turns everything in the bodyparser to json. bodyParser is middleware so needs to be in the correct order
app.use(bodyParser.json())

//dictates the URL path to use after http://localhost:4000
app.use(('/api'), router)

//Makes sure Express is listening to the local host
app.listen(port, () => console.log(`App is listenting on port ${port}`))
