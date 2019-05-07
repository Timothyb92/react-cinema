import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoreMoviesByGenre } from '../../actions/movieActions';

class LoadMoreMoviesByGenre extends Component {
  state = {
    page: 2
  };

  handleSubmit = () => {
    this.setState({
      page: this.state.page + 1
    });

    let page = this.state.page;
    let genreID = this.props.genreID;

    this.props.getMoreMoviesByGenre(genreID, page);
  };

  render() {
    console.log(this.props);
    return (
      <div className="col">
        <button
          className="h-100 w-100 btn btn-info"
          onClick={this.handleSubmit}
        >
          <p>Load</p>
          <p>More</p>
          <p>Movies</p>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { movies } = state.search;
  return {
    movies
  };
};

export default connect(
  mapStateToProps,
  { getMoreMoviesByGenre }
)(LoadMoreMoviesByGenre);
