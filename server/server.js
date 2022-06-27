const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

const apiKey = process.env.APP_API_KEY
// console.log(apiKey)
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const recipes = require('./routes/home')
server.use('/api/v1/recipes', recipes)

// const serverURL = 'https://api.spoonacular.com/recipes/random'
const serverURL = 'https://api.spoonacular.com/recipes/findByIngredients'

server.get('/recipes', (req, res) => {
  request
    .get(
      serverURL +
        '?apiKey=' +
        apiKey +
        '&ingredients=flour,+cocoapowder&number=2'
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Server error')
    })
})

module.exports = server
