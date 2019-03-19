import React, { Component } from 'react';
//Also have axios on App.js. Need to find out how to move results from API request through components. Perhaps Redux.
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

class AppSearchBar extends Component {
  state = {
    title: '',
    genre: '',
    actor: '',
    rated: ''
  };

  //Cleaning user input to properly query API
  //EX: changes input like 'THE LION KING' to 'The+Lion+King'
  cleanInput = input => {
    let cleanInput;
    let lowerCaseTitle;
    let titleArray;
    let upperCaseArray;

    lowerCaseTitle = input.toLowerCase();
    titleArray = lowerCaseTitle.split(' ');
    upperCaseArray = titleArray.map(
      e => e.charAt(0).toUpperCase() + e.substring(1)
    );
    cleanInput = upperCaseArray.join('+');

    return cleanInput;
  };

  handleSubmit = e => {
    e.preventDefault();

    let { title, genre, actor, rated } = this.state;

    title = this.cleanInput(title);

    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`)
      .then(res => {
        console.log(res);
      });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //Tried using value attribute as placeholder, but can't type in input boxes.
    //Try <label htmlFor='string' /> instead
    return (
      <nav className="navbar">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  // value="Movie Title..."
                  name="title"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  // value="Genre..."
                  name="genre"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  // value="Actor/Actress..."
                  name="actor"
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  // value="Rated..."
                  name="rated"
                  onChange={this.handleChange}
                />
                <div className="row">
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary btn-block w-100"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppSearchBar;