import { combineReducers } from 'redux';
import moviesCategoryReducer from './reducers/movies-category-reducer/moviesCategoryReducer';
import allMoviesReducer from './reducers/all-movies-reducer/allMoviesReducer';
import filter from './reducers/filter';

const rootReducer = combineReducers({
  movieCategory: moviesCategoryReducer,
  allMovies: allMoviesReducer,
  filter,
});

export default rootReducer;
