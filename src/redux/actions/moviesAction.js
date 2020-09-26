import {
  FETCH_MOVIE_COLLECTION_FAILURE,
  FETCH_MOVIE_COLLECTION_REQUEST,
  FETCH_MOVIE_COLLECTION_SUCCESS
} from './moviesActionType'

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