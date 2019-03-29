import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getMoviesOnLoad,
  getMoviesOnSearch
} from '../../actions/searchActions';

class MovieList extends Component {
  // state = {
  //   movies: []
  // };

  componentDidMount() {
    this.props.getMoviesOnLoad();
  }

  render() {
    console.log(this.props);
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
