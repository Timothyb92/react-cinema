import { GET_MOVIES_ON_LOAD, GET_MOVIES_ON_SEARCH } from '../actions/types';

const initialState = {
  movies: ['Dummy data 1', 'Dummy data 2']
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
        movies: action.payload
      };
    default:
      return state;
  }
}
