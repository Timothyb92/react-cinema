import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMoviesByGenre } from '../../actions/movieActions';

import LoadMoreMovies from './LoadMoreMovies';

class GenreList extends Component {
  //Commented this out because it was emtying the state after a genre button was clicked.
  /*
  componentDidMount() {
    this.props.getMoviesByGenre();
  }
  */

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
      <div className="container">
        <div className="row">
          {movies.map(movie => {
            return (
              <div className="col-md-4" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    onError={this.renderPosterOnError}
                  />
                  <h4 className="text-center">{movie.title}</h4>
                </Link>
              </div>
            );
          })}
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
  { getMoviesByGenre }
)(GenreList);
