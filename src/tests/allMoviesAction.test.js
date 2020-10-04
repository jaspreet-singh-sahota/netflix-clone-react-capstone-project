import fetchAllMovies from '../redux/actions/all-movies-actions/allMoviesAction';
import { FETCH_ALL_MOVIES } from '../redux/actions/actionType';

describe('get Movies', () => {
  const parameter = 'movie';
  const genre = 'NetflixOriginals';

  it('should create an action to search for all comic movies', () => {
    const expectedAction = {
      type: FETCH_ALL_MOVIES,
      payload: parameter,
    };
    expect(fetchAllMovies(parameter)).toEqual(expectedAction);
  });

  it('should create an action to search for a movie with genre', () => {
    const expectedAction = {
      type: FETCH_ALL_MOVIES,
      payload: parameter,
      genre,
    };
    expect(fetchAllMovies(parameter, genre)).toEqual(expectedAction);
  });
});
