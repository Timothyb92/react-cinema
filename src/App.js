import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppSearchBar from './components/layout/AppSearchBar';
import Header from './components/layout/Header';
import MovieList from './components/movies/MovieList';
import SideBar from './components/layout/SideBar';
import MovieDetails from './components/movies/MovieDetails';
import CastMember from './components/cast/CastMember';

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
            <Router>
              <Switch>
                <Route exact path="/" component={MovieList} />
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route exact path="/person/:id" component={CastMember} />
              </Switch>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
