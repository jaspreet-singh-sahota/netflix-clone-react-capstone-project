import { fetchMoviesCollectionRequest, fetchMoviesCollectionSuccess, fetchMoviesCollectionFailure } from '../redux/actions/movies-category-actions/moviesCategoryAction';
import { FETCH_MOVIE_COLLECTION_REQUEST, FETCH_MOVIE_COLLECTION_FAILURE, FETCH_MOVIE_COLLECTION_SUCCESS } from '../redux/actions/actionType';

describe('get movies category', () => {
  const parameter = 'movie';
  const genre = 'NetflixOriginals';

  it('should create an action to fetch movies', () => {
    const expectedAction = {
      type: FETCH_MOVIE_COLLECTION_REQUEST,
    };
    expect(fetchMoviesCollectionRequest()).toEqual(expectedAction);
  });

  it('should create an action for fetching movies successfully', () => {
    const expectedAction = {
      type: FETCH_MOVIE_COLLECTION_SUCCESS,
      payload: parameter,
      genre,
    };
    expect(fetchMoviesCollectionSuccess(parameter, genre)).toEqual(expectedAction);
  });

  it('should create an action to handle the error while fetching movies', () => {
    const parameter = 'error message';
    const expectedAction = {
      type: FETCH_MOVIE_COLLECTION_FAILURE,
      payload: parameter,
    };
    expect(fetchMoviesCollectionFailure(parameter, genre)).toEqual(expectedAction);
  });
});
