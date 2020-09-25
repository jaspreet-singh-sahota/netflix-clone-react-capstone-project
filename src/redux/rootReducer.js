import { combineReducers } from "redux";
import { moviesReducer } from './reducers/moviesReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
})

export default rootReducer
