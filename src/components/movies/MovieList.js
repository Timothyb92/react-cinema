import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getMoviesOnLoad,
  getMoviesOnSearch
} from '../../actions/searchActions';
// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_OMDb_KEY;

class MovieList extends Component {
  // state = {
  //   movies: []
  // };

  componentDidMount() {
    this.props.getMoviesOnLoad();
    console.log(this.props);
  }

  render() {
    let { movies } = this.props;
    console.log(movies);

    return (
      <div>Testing</div>
      // <div className="container">
      //   <div className="row">
      //     {movies.map((movie, index) => {
      //       return (
      //         <div className="col-md-4">
      //           <img src={movie.Poster} alt={movie.Title} />
      //           <h4 className="text-center">{movie.Title}</h4>
      //         </div>
      //       );
      //     })}
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { getMoviesOnLoad, getMoviesOnSearch }
)(MovieList);
