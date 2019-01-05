import React from 'react';
// import PropTypes from 'prop-types';

import './Tutorials.scss';

class Tutorials extends React.Component {
  render() {
    const { tutorial } = this.props;

    return (
      <li className="resource-items">
      <span className="rs-name">{tutorial.name}</span>
      <span className="rs-url">{tutorial.url}</span>
      <span className="rs-uid">{tutorial.uid}</span>
      </li>
    );
  }
}

export default Tutorials;
