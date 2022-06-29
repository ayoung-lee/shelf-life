import React from 'react'

import AddIngredient from './AddIngredient'
import Recipes from './Recipes'
import Ingredients from './Ingredients'

export default function App() {
  return (
    <>
      <Recipes />
      <Ingredients />
      <AddIngredient />
    </>
  )
}
