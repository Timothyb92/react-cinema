import {
  GET_MOVIES_ON_LOAD,
  GET_MOVIES_ON_SEARCH,
  GET_MORE_MOVIES
} from './types';

import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDb_KEY;

export const getMoviesOnLoad = () => async dispatch => {
  let initialSearch = 'street fighter';
  let res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&query=${initialSearch}`
  );
  // console.log(res.data.results);
  dispatch({
    type: GET_MOVIES_ON_LOAD,
    payload: res.data.results,
    titleSearched: initialSearch
  });
};

export const getMoviesOnSearch = title => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&query=${title}`
  );
  dispatch({
    type: GET_MOVIES_ON_SEARCH,
    payload: res.data.results,
    titleSearched: title
  });
};

export const getMoreMovies = (title, page) => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&query=${title}&page=${page}`
  );

  dispatch({
    type: GET_MORE_MOVIES,
    payload: res.data.results
  });
};
