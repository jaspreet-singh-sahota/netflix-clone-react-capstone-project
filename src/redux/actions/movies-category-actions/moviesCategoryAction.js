import {
  FETCH_MOVIE_COLLECTION_FAILURE,
  FETCH_MOVIE_COLLECTION_REQUEST,
  FETCH_MOVIE_COLLECTION_SUCCESS,
  MOVIE_CATEGORY_FILTER
} from '../actionType'

export const fetchMoviesCollectionRequest = () => {
  return {
    type: FETCH_MOVIE_COLLECTION_REQUEST
  }
}

export const fetchMoviesCollectionSuccess = (movieCollection , genre) => {
  return {
    type: FETCH_MOVIE_COLLECTION_SUCCESS,
    payload: movieCollection,
    genre
  }
}

export const fetchMoviesCollectionFailure = (error) => {
  return {
    type: FETCH_MOVIE_COLLECTION_FAILURE,
    payload: error
  }
}

export const movieCategoryFilter = category => ({
  type: MOVIE_CATEGORY_FILTER,
  payload: category,
});