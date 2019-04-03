import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie, getCredits } from '../../actions/movieActions';

import CastList from '../cast/CastList';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMovies: true,
      loadingCredits: true
    };
  }

  componentDidMount = () => {
    let { id } = this.props.match.params;
    this.props
      .getCredits(id)
      .then(() => this.setState({ loadingCredits: false }));

    this.props.getMovie(id).then(() => this.setState({ loadingMovies: false }));
  };

  renderPosterOnError = img => {
    img.target.src =
      'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg';
  };

  render() {
    let { movie, credits } = this.props;
    if (this.state.loadingMovies || this.state.loadingCredits) {
      return (
        <div>
          <h4>Loading..</h4>
        </div>
      );
    } else {
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
            <div className="row">
              <p className="col">{movie.overview}</p>
            </div>
            <div className="row">
              <div className="col">
                <CastList cast={credits.cast} />
                {/* {credits.cast.map(castMember => {
                  return (
                    <div key={castMember.id}>
                      <p>{`${castMember.character} as played by ${
                        castMember.name
                      }`}</p>
                    </div>
                  );
                })} */}
              </div>
            </div>
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
