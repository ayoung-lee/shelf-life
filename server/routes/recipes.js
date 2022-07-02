const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const request = require('superagent')

const router = express.Router()

const serverURL = 'https://api.spoonacular.com/recipes/findByIngredients'
const apiKey = process.env.APP_API_KEY

// GET /api/v1/recipes
router.get('/', (req, res) => {
  // somehow get the ingredients from the client
  request
    .get(
      serverURL +
        '?apiKey=' +
        apiKey +
        '&ingredients=Salami,+Cheese,+Milk&number=2'
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Server error')
    })
})

module.exports = router
