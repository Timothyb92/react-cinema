import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoreMovies } from '../../actions/movieActions';

class LoadMoreMovies extends Component {
  state = {
    page: 2
  };

  handleSubmit = () => {
    this.setState({
      page: this.state.page + 1
    });

    let page = this.state.page;
    let title = this.props.titleSearched;

    this.props.getMoreMovies(title, page);
  };

  render() {
    return (
      <>
        <button onClick={this.handleSubmit}>
          <p>Load</p>
          <p>More</p>
          <p>Movies</p>
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  let { movies, titleSearched } = state.search;
  return {
    movies,
    titleSearched
  };
};

export default connect(
  mapStateToProps,
  { getMoreMovies }
)(LoadMoreMovies);
