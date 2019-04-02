import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie, getCredits } from '../../actions/movieActions';

class MovieDetails extends Component {
  componentDidMount = () => {
    let { id } = this.props.match.params;
    this.props.getMovie(id);
    this.props.getCredits(id);
  };

  renderPosterOnError = img => {
    img.target.src =
      'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg';
  };

  render() {
    let { movie, credits } = this.props;
    if (movie === undefined) {
      return (
        <div>
          <h4>Loading..</h4>
        </div>
      );
    } else {
      console.log(credits);
      return (
        <div className="row">
          <div className="col">
            <h2>{movie.original_title}</h2>
            <p>{movie.tagline}</p>
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              onError={this.renderPosterOnError}
            />
          </div>
          <div className="col">
            <p>{movie.overview}</p>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movie: state.search.movie,
    credits: state.search.credits
  };
};

export default connect(
  mapStateToProps,
  { getMovie, getCredits }
)(MovieDetails);
