import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getMoviesOnLoad,
  getMoviesOnSearch
} from '../../actions/searchActions';

import LoadMoreMovies from './LoadMoreMovies';

class MovieList extends Component {
  componentDidMount() {
    this.props.getMoviesOnLoad();
  }

  render() {
    let { movies } = this.props;

    if (movies === undefined) {
      return (
        <div>
          <h2>Oh no! Something went wrong!</h2>
          <p>Try searching something different.</p>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          {movies.map(movie => {
            return (
              <div className="col-md-4" key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h4 className="text-center">{movie.Title}</h4>
              </div>
            );
          })}
        </div>
        <div className="row">
          <LoadMoreMovies />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.search.movies
  };
};

export default connect(
  mapStateToProps,
  { getMoviesOnLoad, getMoviesOnSearch }
)(MovieList);
