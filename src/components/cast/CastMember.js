import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../../actions/movieActions';

class CastMember extends Component {
  componentDidMount = () => {
    let { id } = this.props.match.params;
    this.props.getPerson(id);
  };

  render() {
    if (this.props.person !== undefined) {
      let { name, id, biography, profile_path } = this.props.person;
      return (
        <div className="row">
          <div className="col">
            <h2>{`${name}`}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w780${profile_path}`}
              alt={`${name}`}
            />
          </div>
          <div className="col">
            <p>{`${biography}`}</p>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = state => {
  return {
    person: state.search.person
  };
};

export default connect(
  mapStateToProps,
  { getPerson }
)(CastMember);
