import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { ADD_INGREDIENT, DEL_INGREDIENT, UPDATE_INGREDIENT } from '../actions'

export default function Ingredients() {
  const ingredients = useSelector((state) => state.ingredients)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({ type: 'ADD_INGREDIENT', payload: 'Orange' })
  // }, [])

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  )
}
