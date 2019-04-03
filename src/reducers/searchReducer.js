import {
  GET_MOVIES_ON_LOAD,
  GET_MOVIES_ON_SEARCH,
  GET_MORE_MOVIES,
  GET_GENRES,
  GET_MOVIE,
  GET_CREDITS,
  GET_PERSON,
  GET_MOVIES_BY_GENRE
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
        movies: action.payload,
        titleSearched: action.titleSearched
      };
    case GET_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case GET_CREDITS:
      return {
        ...state,
        credits: action.payload
      };
    case GET_PERSON:
      return {
        ...state,
        person: action.payload
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
}
