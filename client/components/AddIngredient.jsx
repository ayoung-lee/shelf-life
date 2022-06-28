import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function AddIngredient() {
  const [item, setItem] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'ADD_INGREDIENT', text: 'item from addIngredientjsx' })
  }, [])

  function handleAdd(e) {
    e.preventDefault()
    console.log(item)
  }

  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <label htmlFor="newIngredient">Enter a new ingredient</label>
          <input
            id="newIngredient"
            type="text"
            name="ingredient"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <input type="submit" value="Add" />
          <li>{item.text}</li>
        </form>
      </div>
    </>
  )
}
