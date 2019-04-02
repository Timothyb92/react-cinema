import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../../actions/searchActions';

class MovieDetails extends Component {
  render() {
    return (
      <div>
        <p>Movie details</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.data
  };
};

export default connect(
  mapStateToProps,
  { getMovie }
)(MovieDetails);
