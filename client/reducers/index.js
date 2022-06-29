import { combineReducers } from 'redux'

import ingredientReducer from './ingredients'

const reducer = combineReducers({
  ingredients: ingredientReducer,
})

export default reducer
