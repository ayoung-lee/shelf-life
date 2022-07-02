import React from 'react'

import AddIngredient from './AddIngredient'
import Recipes from './Recipes'
import Ingredients from './Ingredients'

export default function App() {
  return (
    <div className="home-wrapper">
      <h1 className="title">What's in your fridge?</h1>
      <blockquote>
        If you can read you can cook, if you can season, you can delight.
        <br></br>
        <cite>
          <i>- Nanette L. Avery</i>
        </cite>
      </blockquote>

      <Ingredients />
      <AddIngredient />
      <Recipes />
    </div>
  )
}
