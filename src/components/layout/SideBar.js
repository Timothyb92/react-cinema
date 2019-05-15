import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenres, getMoviesByGenre } from '../../actions/movieActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: solid 1px red;
  padding: 5px 10px;

  ${props => console.log(props)}
`;

let GenreButton = styled.button`
  color: #791cce;
  border: 2px solid #791cce;
  border-radius: 20px;
  font-size: 22px;
  padding: 5px 10px;
  width: 100%;
  margin: 10px 0;
  background: linear-gradient(to right, #791cce 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.25s ease-out;

  :hover {
    background-position: left bottom;
  }

  :hover div {
    color: white;
  }

  :hover svg {
    color: white;
  }
`;

let Text = styled.div`
  color: #791cce;
  transition: all 0.25s ease-out;
`;

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
        <SideBarWrapper>
          {genres.map(genre => {
            return (
              <div key={genre.id}>
                <Link to={`/genre/${genre.id}`}>
                  <GenreButton
                    onClick={() => {
                      this.handleGenreClick(genre.id);
                    }}
                  >
                    <FontAwesomeIcon icon="check-square" />
                    <Text>{genre.name}</Text>
                  </GenreButton>
                </Link>
              </div>
            );
          })}
        </SideBarWrapper>
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
