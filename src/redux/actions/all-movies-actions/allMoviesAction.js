import { FETCH_ALL_MOVIES } from "../actionType"

export const fetchAllMovies = (movieCollection, genre) => {
  return {
    type: FETCH_ALL_MOVIES,
    payload: movieCollection,
    genre
  }
}