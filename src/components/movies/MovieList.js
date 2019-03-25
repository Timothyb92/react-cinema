import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDb_KEY;

class MovieList extends Component {
  state = {
    movies: []
  };

  componentDidMount = () => {
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=Street+Fighter`
      )
      .then(res => {
        let movies = res.data.Search;
        this.setState({ movies });
      });
  };

  render() {
    let { movies } = this.state;
    console.log(movies);

    return (
      <div className="container">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <div className="col-md-4">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MovieList;
