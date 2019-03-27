import { GET_MOVIES_ON_LOAD, GET_MOVIES_ON_SEARCH } from './types';

import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

export const getMoviesOnLoad = () => async dispatch => {
  let res = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=Fast`
  );
  dispatch({
    type: GET_MOVIES_ON_LOAD,
    payload: res.data.Search
  });
};

export const getMoviesOnSearch = title => async dispatch => {
  let res = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`
  );
  dispatch({
    type: GET_MOVIES_ON_SEARCH,
    payload: res.data
  });
};
