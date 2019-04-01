import React, { Component } from 'react';
import './App.css';

import AppSearchBar from './components/layout/AppSearchBar';
import Header from './components/layout/Header';
import MovieList from './components/movies/MovieList';
import SideBar from './components/layout/SideBar';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <AppSearchBar />
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">
            <MovieList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
