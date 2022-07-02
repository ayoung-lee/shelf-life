import React from 'react'
import { useDispatch } from 'react-redux'
import { delIngredient } from '../actions'

export default function Ingredient(props) {
  const ingredient = props.item
  const dispatch = useDispatch()

  function handleDel() {
    dispatch(delIngredient(ingredient))
  }

  return (
    <div>
      {Ingredient}
      <button className="delete--btn" onClick={() => handleDel()}>
        Del
      </button>
    </div>
  )
}
