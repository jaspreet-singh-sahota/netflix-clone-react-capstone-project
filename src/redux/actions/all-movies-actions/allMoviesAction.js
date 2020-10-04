import { FETCH_ALL_MOVIES } from '../actionType';

const fetchAllMovies = (movieCollection, genre) => ({
  type: FETCH_ALL_MOVIES,
  payload: movieCollection,
  genre,
});

export default fetchAllMovies;
