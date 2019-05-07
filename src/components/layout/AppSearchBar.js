import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesOnSearch } from '../../actions/movieActions';

class AppSearchBar extends Component {
  state = {
    title: ''
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
      <nav>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title" className="row">
            Title
          </label>
          <input type="text" name="title" onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </nav>
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
