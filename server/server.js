// const dotenv = require('dotenv')
// dotenv.config()

const path = require('path')
const express = require('express')
// const request = require('superagent')
const recipes = require('./routes/recipes')

const server = express()

// const apiKey = process.env.APP_API_KEY

// Middleware (body parser)
server.use(express.json())

// Static folder
server.use(express.static(path.join(__dirname, './public')))

// Routes
// const recipes = require('./routes/recipes')
server.use('/api/v1/recipes', recipes)

// const serverURL = 'https://api.spoonacular.com/recipes/findByIngredients'

// server.get('/recipes', (req, res) => {
//   // somehow get the ingredients from the client
//   request
//     .get(
//       serverURL + '?apiKey=' + apiKey + '&ingredients=Salami,+Milkr&number=2'
//     )
//     .then((response) => {
//       res.json(response.body)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).send('Server error')
//     })
// })

module.exports = server
