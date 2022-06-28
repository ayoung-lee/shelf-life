import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function AddIngredient() {
  const [item, setItem] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'ADD_INGREDIENT', text: 'item from addIngredientjsx' })
  }, [])

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Add new ingredient in your fridge here! 🥑🍆"
        />
        <button>Add Ingredient</button>
        <li>{item.text}</li>
      </div>
    </>
  )
}
