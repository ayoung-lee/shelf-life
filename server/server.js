const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const request = require('superagent')

const welcome = require('./routes/welcome')

const server = express()

// const apiKey = process.env.API_KEY

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)

const serverURL = 'https://api.spoonacular.com'

server.get('/fridge', (req, res) => {
  request
    .get(serverURL + '/recipes/findByIngredients')
    .set(['?x-api-key=8c3eded167d64824a1a11b48000cf780'])
    .then((response) => {
      console.log(response.status)
      console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('err')
    })
})

module.exports = server
