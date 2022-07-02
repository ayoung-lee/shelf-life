import React from 'react'
import { useSelector } from 'react-redux'
import Ingredient from './Ingredient'

export default function Ingredients() {
  const ingredients = useSelector((state) => state.ingredients)

  return (
    <div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <Ingredient item={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  )
}
