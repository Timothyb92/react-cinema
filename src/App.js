import React, { Component } from 'react';
import './App.css';

import AppSearchBar from './components/layout/AppSearchBar';
import Header from './components/layout/Header';
import MovieList from './components/movies/MovieList';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <AppSearchBar />
        <MovieList />
      </Provider>
    );
  }
}

export default App;
