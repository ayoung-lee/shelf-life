import { combineReducers } from 'redux'

import ingredientReducer from './ingredients'

const reducer = combineReducers({
  ingredient: ingredientReducer,
})

export default reducer
