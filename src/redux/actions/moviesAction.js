import {
  FETCH_MOVIE_COLLECTION_FAILURE,
  FETCH_MOVIE_COLLECTION_REQUEST,
  FETCH_MOVIE_COLLECTION_REQUEST
} from './moviesActionType'

export const fetchMoviesCollectionRequest = () => {
  return {
    type: FETCH_MOVIE_COLLECTION_REQUEST
  }
}

export const fetchMoviesCollectionSuccess = (movieCollection) => {
  return {
    type: FETCH_MOVIE_COLLECTION_SUCCESS,
    payload: movieCollection
  }
}

export const fetchMoviesCollectionFailure = (error) => {
  return {
    type: FETCH_MOVIE_COLLECTION_FAILURE,
    payload: error
  }
}