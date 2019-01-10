import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import filterReducer from './filterReducer'

const reducers = combineReducers({
  todoReducer,
  filterReducer,
})

export default reducers