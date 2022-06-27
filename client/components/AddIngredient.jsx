import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Home(props) {
  const [item, setItem] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'ADD_INGREDIENT', text: 'item from addIngredientjsx' })
  }, [])

  function addIngredient() {
    // add new ingredient
  }

  const handleChange = (e) => {
    // tract input field's stateegg
    setItem(e.target.value)
  }

  return (
    <>
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add new ingredient in your fridge here! 🥑🍆"
        />
        <button onClick={addIngredient}>Add Ingredient</button>
        <li>{props.text}</li>
      </div>
    </>
  )
}
