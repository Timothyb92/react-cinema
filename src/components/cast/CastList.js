import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CastList extends Component {
  render() {
    let { cast } = this.props;
    return (
      <div>
        <ul>
          {cast.map(castMember => {
            let { character, id, name, profile_path } = castMember;
            return (
              <li key={id}>
                <Link to={`/person/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185${profile_path}`}
                    alt={`${name}`}
                  />
                  {`${character} as played by ${name}`}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CastList;
