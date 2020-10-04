import allMoviesReducer from '../redux/reducers/all-movies-reducer/allMoviesReducer';
import { FETCH_ALL_MOVIES } from '../redux/actions/actionType';

describe('get Characters', () => {
  const initialState = {
    loading: false,
    movieCollection: [],
    error: '',
  };

  it('should return the initial state', () => {
    expect(allMoviesReducer(undefined, {
      type: FETCH_ALL_MOVIES,
      payload: '',
    })).toEqual(initialState);
  });
});
