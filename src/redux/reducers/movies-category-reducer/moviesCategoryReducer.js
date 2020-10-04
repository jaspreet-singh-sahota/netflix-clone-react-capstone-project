/* eslint-disable  no-return-assign */
/* eslint-disable  no-param-reassign */

import {
  FETCH_MOVIE_COLLECTION_REQUEST,
  FETCH_MOVIE_COLLECTION_SUCCESS,
  FETCH_MOVIE_COLLECTION_FAILURE,
} from '../../actions/actionType';

const INITIAL_STATE = {
  loading: false,
  movieCollection: [],
  error: '',
};

const moviesCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_COLLECTION_REQUEST: return {
      ...state,
      loading: true,
    };
    case FETCH_MOVIE_COLLECTION_SUCCESS: return {
      ...state,
      loading: false,
      movieCollection:
        [...state.movieCollection,
          { [action.genre]: { ...state.movieCollection[action.genre] = action.payload } },
        ],
      error: '',
    };
    case FETCH_MOVIE_COLLECTION_FAILURE: return {
      loading: false,
      movieCollection: [],
      error: action.payload,
    };
    default: return state;
  }
};

export default moviesCategoryReducer;
