const express = require('express')

const router = express.Router()

// GET /api/v1/recipes/
router.get('/', (req, res) => {
  try {
    res.json({ statement: "What's in my fridge?" })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
