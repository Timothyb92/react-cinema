import { GET_MOVIES_ON_LOAD, GET_MOVIES_ON_SEARCH } from './types';

import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

export const getMovesOnLoad = () => async dispatch => {
  let res = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=Street+Fighter`
  );
  dispatch({
    type: GET_MOVIES_ON_LOAD,
    payload: res.data
  });
};
