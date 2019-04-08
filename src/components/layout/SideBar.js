import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenres, getMoviesByGenre } from '../../actions/movieActions';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  componentDidMount = () => {
    this.props.getGenres();
  };

  handleGenreClick = genreID => {
    this.props.getMoviesByGenre(genreID);
  };

  render() {
    let { genres } = this.props;

    if (genres) {
      return (
        <div>
          {genres.map(genre => {
            return (
              <div key={genre.id} className="text-center">
                <Link to={`/genre/${genre.id}`}>
                  <button
                    className="btn btn-primary w-100 m-1"
                    onClick={() => {
                      this.handleGenreClick(genre.id);
                    }}
                  >
                    <p className="text-center m-0">{genre.name}</p>
                  </button>
                </Link>
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
  { getGenres, getMoviesByGenre }
)(SideBar);
