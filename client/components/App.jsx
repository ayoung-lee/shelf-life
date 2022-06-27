import React, { useState, useEffect } from 'react'

import { getHome, getRecipes } from '../apiClient'
import Home from './Home'

function App() {
  const [recipes, setRecipes] = useState('')

  useEffect(() => {
    getRecipes()
      .then((res) => {
        setRecipes(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>{recipes}</h1>
      <Home />
    </>
  )
}

export default App
