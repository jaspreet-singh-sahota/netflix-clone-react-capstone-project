import { FETCH_ALL_MOVIES } from '../../actions/actionType';

const INITIAL_STATE = {
  loading: false,
  movieCollection: [],
  error: '',
};

const allMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES: return {
      ...state,
      loading: false,
      movieCollection: [...state.movieCollection, ...action.payload],
      error: '',
    };
    default: return state;
  }
};

export default allMoviesReducer;
