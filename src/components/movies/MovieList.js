import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMoviesOnLoad, getMoviesOnSearch } from '../../actions/movieActions';

import LoadMoreMovies from './LoadMoreMovies';

class MovieList extends Component {
  componentDidMount() {
    this.props.getMoviesOnLoad();
  }

  renderPosterOnError = img => {
    img.target.src =
      'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg';
  };

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
      <>
        {movies.map(movie => {
          return (
            <div key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  onError={this.renderPosterOnError}
                />
                <h4>{movie.title}</h4>
              </Link>
            </div>
          );
        })}
        <LoadMoreMovies />
      </>
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
