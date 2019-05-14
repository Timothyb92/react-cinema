import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import AppSearchBar from './components/layout/AppSearchBar';
import Header from './components/layout/Header';
import MovieList from './components/movies/MovieList';
import SideBar from './components/layout/SideBar';
import MovieDetails from './components/movies/MovieDetails';
import CastMember from './components/cast/CastMember';
import GenreList from './components/movies/GenreList';

import { Provider } from 'react-redux';
import store from './store';

let MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #ddd;
  // border: solid 1px red;
`;

let SideWrapper = styled.div`
  flex-direction: column;
  background: #e8e8e8;
  // border: solid 1px green;
`;

let ContentWrapper = styled.div`
  flex-direction: row;
  background: #ccc;
  // border: solid 1px blue;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainWrapper>
            <Header />
            <AppSearchBar />
            <SideWrapper>
              <SideBar />
            </SideWrapper>
            <ContentWrapper>
              <Switch>
                <Route exact path="/" component={MovieList} />
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route exact path="/person/:id" component={CastMember} />
                <Route expact path="/genre/:id" component={GenreList} />
              </Switch>
            </ContentWrapper>
          </MainWrapper>
        </Router>
      </Provider>
    );
  }
}

export default App;
