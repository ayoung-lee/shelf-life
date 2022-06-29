import React, { useState, useEffect } from 'react'

import { getRecipes } from '../apiClient'

export default function Recipes() {
  // is this the right datatype
  const [recipes, setRecipes] = useState('')

  // use the ingredients to get the recipes
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
