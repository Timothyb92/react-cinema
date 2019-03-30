import {
  GET_MOVIES_ON_LOAD,
  GET_MOVIES_ON_SEARCH,
  GET_MORE_MOVIES
} from '../actions/types';

const initialState = {
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_ON_LOAD:
      return {
        ...state,
        movies: action.payload,
        titleSearched: action.titleSearched
      };
    case GET_MOVIES_ON_SEARCH:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };
    default:
      return state;
  }
}
