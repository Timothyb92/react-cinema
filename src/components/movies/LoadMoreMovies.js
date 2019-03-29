import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getMoviesOnLoad,
  getMoviesOnSearch
} from '../../actions/searchActions';

class LoadMoreMovies extends Component {
  state = {
    page: 1
  };

  handleSubmit = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  render() {
    return (
      <div className="col">
        <button className="w-100 btn btn-info" onClick={this.handleSubmit}>
          Load More Movies
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.search.movies,
    title: state.titleSearched
  };
};

export default connect(
  mapStateToProps,
  { getMoviesOnLoad, getMoviesOnSearch }
)(LoadMoreMovies);
