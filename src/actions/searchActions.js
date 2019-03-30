import {
  GET_MOVIES_ON_LOAD,
  GET_MOVIES_ON_SEARCH,
  GET_MORE_MOVIES
} from './types';

import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

export const getMoviesOnLoad = () => async dispatch => {
  let initialSearch = 'street fighter';
  let res = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${initialSearch}`
  );
  dispatch({
    type: GET_MOVIES_ON_LOAD,
    payload: res.data.Search,
    titleSearched: initialSearch
  });
};

export const getMoviesOnSearch = title => async dispatch => {
  let res = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`
  );
  dispatch({
    type: GET_MOVIES_ON_SEARCH,
    payload: res.data.Search,
    titleSearched: title
  });
};

export const getMoreMovies = (title, page) => async dispatch => {
  let res = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}&page=${page}`
  );
  console.log(`getMoreMovies running with title ${title} and page ${page}`);

  dispatch({
    type: GET_MORE_MOVIES,
    payload: res.data.Search
  });
};
