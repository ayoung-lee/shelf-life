import React, { useEffect, useState } from 'react'

function Home() {
  const ingredientsArr = ['Milk', 'Eggs']

  const ingredientElements = ingredientsArr.map((ingredient) => (
    <p key={ingredient}>{ingredient}</p>
  ))

  return (
    <>
      <div>
        <button>Add Ingredient</button>
        {ingredientElements}
      </div>
    </>
  )
}

export default Home
