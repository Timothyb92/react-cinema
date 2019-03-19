import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import AppSearchBar from './components/layout/AppSearchBar';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

class App extends Component {
  //Was testing API endpoint by logging it out when app loads
  // componentDidMount() {
  //   axios
  //     .get(
  //       `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=The+Big+Lebowski`
  //     )
  //     .then(res => {
  //       console.log(res);
  //     });
  // }

  render() {
    return <AppSearchBar />;
  }
}

export default App;
