import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoreMovies } from '../../actions/searchActions';

class LoadMoreMovies extends Component {
  state = {
    page: 1
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props);
  }

  handleSubmit = () => {
    this.setState({
      page: this.state.page + 1
    });
    this.props.getMoreMovies(this.props.title, this.state.page);
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
  let { movies, titleSearched } = state.search;
  console.log(movies, titleSearched);
  return {
    movies,
    titleSearched
  };
};

export default connect(
  mapStateToProps,
  { getMoreMovies }
)(LoadMoreMovies);
