import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

class AppSearchBar extends Component {
  state = {
    title: '',
    genre: '',
    actor: '',
    rated: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    let { title, genre, actor, rated } = this.state;

    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=${title}`)
      .then(res => {
        console.log(res);
      });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
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
