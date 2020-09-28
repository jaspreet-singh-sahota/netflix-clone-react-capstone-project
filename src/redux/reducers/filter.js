import { MOVIE_CATEGORY_FILTER } from '../actions/actionType';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case MOVIE_CATEGORY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filter;