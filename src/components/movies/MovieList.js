import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMoviesOnLoad, getMoviesOnSearch } from '../../actions/movieActions';
import styled from 'styled-components';

import LoadMoreMovies from './LoadMoreMovies';

let ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: solid 1px blue;
`;

let MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

let PosterWrapper = styled.img`
  border-radius: 5px;
  height: 450px;
  width: 300px;
`;

let DetailsWrapper = styled.div`
  color: red;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  max-width: 300px;
`;

class MovieList extends Component {
  componentDidMount() {
    this.props.getMoviesOnLoad();
  }

  renderPosterOnError = img => {
    img.target.src =
      'http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg';
  };

  render() {
    let { movies } = this.props;

    if (movies === undefined) {
      return (
        <div>
          <h2>Oh no! Something went wrong!</h2>
          <p>Try searching something different.</p>
        </div>
      );
    }

    return (
      <ListWrapper>
        {movies.map(movie => {
          return (
            <MovieWrapper key={movie.id}>
              <Link to={`movie/${movie.id}`}>
                <PosterWrapper
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  onError={this.renderPosterOnError}
                />
                <DetailsWrapper>{movie.title}</DetailsWrapper>
              </Link>
            </MovieWrapper>
          );
        })}
        <LoadMoreMovies />
      </ListWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.search.movies
  };
};

export default connect(
  mapStateToProps,
  { getMoviesOnLoad, getMoviesOnSearch }
)(MovieList);
