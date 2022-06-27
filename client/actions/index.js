export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  }
}
