import {
  FETCH_MOVIE_COLLECTION_FAILURE,
  FETCH_MOVIE_COLLECTION_REQUEST,
  FETCH_MOVIE_COLLECTION_SUCCESS,
  MOVIE_CATEGORY_FILTER,
} from '../actionType';

export const fetchMoviesCollectionRequest = () => ({
  type: FETCH_MOVIE_COLLECTION_REQUEST,
});

export const fetchMoviesCollectionSuccess = (movieCollection, genre) => ({
  type: FETCH_MOVIE_COLLECTION_SUCCESS,
  payload: movieCollection,
  genre,
});

export const fetchMoviesCollectionFailure = error => ({
  type: FETCH_MOVIE_COLLECTION_FAILURE,
  payload: error,
});

export const movieCategoryFilter = category => ({
  type: MOVIE_CATEGORY_FILTER,
  payload: category,
});
