import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    movies: state.search.movies
  };
};

export default connect(mapStateToProps)(LoadMoreMovies);
