import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addIngredient } from '../actions'

export default function AddIngredient() {
  const [ingredient, setIngredient] = useState('')
  const dispatch = useDispatch()

  function handleAdd(e) {
    e.preventDefault()
    dispatch(addIngredient(ingredient))
    setIngredient('')
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
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  )
}
