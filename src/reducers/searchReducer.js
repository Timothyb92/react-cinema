import { GET_MOVIES_ON_LOAD, GET_MOVIES_ON_SEARCH } from '../actions/types';

const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_ON_LOAD:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIES_ON_SEARCH:
      return {
        ...state,
        moves: action.payload
      };
    default:
      return state;
  }
}
