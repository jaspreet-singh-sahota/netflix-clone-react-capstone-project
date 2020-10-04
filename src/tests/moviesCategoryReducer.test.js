import { FETCH_MOVIE_COLLECTION_REQUEST, FETCH_MOVIE_COLLECTION_SUCCESS, FETCH_MOVIE_COLLECTION_FAILURE } from '../redux/actions/actionType';
import moviesCategoryReducer from '../redux/reducers/movies-category-reducer/moviesCategoryReducer';

describe('get Characters', () => {
  const initialState = {
    loading: false,
    movieCollection: [],
    error: '',
  };

  it('should return the initial state when fetches for the movie', () => {
    expect(moviesCategoryReducer(undefined, {
      type: FETCH_MOVIE_COLLECTION_REQUEST,
    })).toEqual({ ...initialState, loading: true });
  });

  it('should return the movie collection when fetches request is successfully', () => {
    expect(moviesCategoryReducer(initialState, {
      type: FETCH_MOVIE_COLLECTION_SUCCESS,
      payload: { lost: 'lost', spiderMan: 'spider man', moneyHeist: 'moneyHeist' },
      genre: 'Trending',
    })).toEqual({
      error: '',
      loading: false,
      movieCollection: [{
        Trending: {
          lost: 'lost',
          moneyHeist: 'moneyHeist',
          spiderMan: 'spider man',
        },
      }],
    });
  });

  it('should throw an error if fetching request is fails', () => {
    expect(moviesCategoryReducer(initialState, {
      type: FETCH_MOVIE_COLLECTION_FAILURE,
      payload: 'error message',
      genre: 'Trending',
    })).toEqual({
      error: 'error message', loading: false, movieCollection: [],
    });
  });
});
