import React, { useState, useEffect } from 'react'

import { getRecipes } from '../apiClient'

export default function RecipesFromHome() {
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

  // function handleClick() {
  //   console.log('button clicked')
  // }

  return (
    <>
      <h1>{recipes}</h1>
      <input type="submit" value="load recipes" />
    </>
  )
}
