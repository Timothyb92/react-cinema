import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesOnSearch } from '../../actions/movieActions';

class AppSearchBar extends Component {
  state = {
    title: '',
    genre: '',
    actor: '',
    rated: ''
  };

  //Cleaning user input to properly query API
  //EX: changes input like 'THE LION KING' to 'The+Lion+King'
  cleanInput = input => {
    let cleanInput;
    let lowerCaseTitle;
    let titleArray;
    let upperCaseArray;

    lowerCaseTitle = input.toLowerCase();
    titleArray = lowerCaseTitle.split(' ');
    upperCaseArray = titleArray.map(
      e => e.charAt(0).toUpperCase() + e.substring(1)
    );
    cleanInput = upperCaseArray.join('+');

    return cleanInput;
  };

  handleSubmit = e => {
    e.preventDefault();

    let { title } = this.state;

    this.props.getMoviesOnSearch(title);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //Tried using value attribute as placeholder, but can't type in input boxes.
    //Try <label htmlFor='string' /> instead
    return (
      <div className="container">
        <nav className="navbar">
          <div className="row">
            {/* <div className="col-md-12"> */}
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="title" className="row">
                    Title
                  </label>
                  <input
                    className="row"
                    type="text"
                    // value="Movie Title..."
                    name="title"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="genre">Genre</label>
                  <input
                    type="text"
                    // value="Genre..."
                    name="genre"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="actor">Actor/Actress</label>
                  <input
                    type="text"
                    // value="Actor/Actress..."
                    name="actor"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="rated">Rated</label>
                  <input
                    type="text"
                    // value="Rated..."
                    name="rated"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary btn-block w-100"
                />
              </div>
            </form>
            {/* </div> */}
          </div>
        </nav>
      </div>
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
  { getMoviesOnSearch }
)(AppSearchBar);
