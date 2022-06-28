import React, { useState, useEffect } from 'react'

import { getRecipes } from '../apiClient'

export default function Recipes() {
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
    </>
  )
}
