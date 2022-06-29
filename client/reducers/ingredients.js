import { ADD_INGREDIENT, DEL_INGREDIENT, UPDATE_INGREDIENT } from '../actions'

const initialIngredientState = ['Milk', 'Eggs']

const ingredientReducer = (state = initialIngredientState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_INGREDIENT':
      return [...state, payload]
    case 'DEL_INGREDIENT':
      return state.filter((ingredient) => ingredient !== payload)
    case 'UPDATE_INGREDIENT':
      return state.map((ingredient) => {
        return ingredient === action.payload.oldIngredient
          ? action.payload.newIngredient
          : ingredient
      })

    default:
      return state
  }
}

export default ingredientReducer
