import {
  GET_MOVIES_ON_LOAD,
  GET_MOVIES_ON_SEARCH,
  GET_MORE_MOVIES,
  GET_GENRES,
  GET_MOVIE,
  GET_CREDITS,
  GET_PERSON,
  GET_MOVIES_BY_GENRE
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

export const getGenres = () => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );

  dispatch({
    type: GET_GENRES,
    payload: res.data.genres
  });
};

export const getMovie = movieID => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
  );

  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
};

export const getCredits = movieID => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`
  );

  dispatch({
    type: GET_CREDITS,
    payload: res.data
  });
};

export const getPerson = personID => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/person/${personID}?api_key=${API_KEY}`
  );

  dispatch({
    type: GET_PERSON,
    payload: res.data
  });
};

export const getMoviesByGenre = genreID => async dispatch => {
  let res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`
  );

  dispatch({
    type: GET_MOVIES_BY_GENRE,
    payload: res.data.results
  });
};
