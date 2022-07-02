const express = require('express')
const router = express.Router()

// GET /api/v1/
router.get('/', (req, res) => {
  try {
    res.json({ statement: 'This message is from home.js' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
