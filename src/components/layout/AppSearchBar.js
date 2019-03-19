import React, { Component } from 'react';

class AppSearchBar extends Component {
  state = {
    title: '',
    genre: '',
    actor: '',
    rated: ''
  };

  render() {
    return (
      <nav className="navbar">
        <div className="container" />
      </nav>
    );
  }
}

export default AppSearchBar;
