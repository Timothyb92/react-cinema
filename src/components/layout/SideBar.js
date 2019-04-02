import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenres } from '../../actions/searchActions';

class SideBar extends Component {
  componentDidMount = () => {
    this.props.getGenres();
  };

  render() {
    let { genres } = this.props;

    if (genres) {
      return (
        <div>
          {genres.map(genre => {
            return (
              <div key={genre.id} className="text-center">
                <button className="btn btn-primary w-100 m-1">
                  <p className="text-center m-0">{genre.name}</p>
                </button>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    genres: state.search.genres
  };
};

export default connect(
  mapStateToProps,
  { getGenres }
)(SideBar);
