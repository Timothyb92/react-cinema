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

    return (
      <div className="container">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <div className="col-md-4">
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

// const mapStateToProps = state => ({
//   movies: state.movies
// });

const mapStateToProps = state => {
  return {
    movies: state.search.movies
  };
};

export default connect(
  mapStateToProps,
  { getMoviesOnLoad, getMoviesOnSearch }
)(MovieList);
