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
        // let moviePosters = movies.map(e => e.Poster);
        // console.log(this.state);
      });
  };

  render() {
    let { movies } = this.state;
    console.log(movies);

    return (
      <div>
        <h1>Movie List</h1>
        {/* <img src="https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg" /> */}
        {movies.map((movie, index) => (
          <div className="card">
            <img
              className="card-img-top"
              src={movie.Poster}
              alt="Movie poster"
            />
            <h2 className="card-title text-center">{movie.Title}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;
