import React from 'react';

import './Tutorials.scss';

class Tutorials extends React.Component {
  render() {
    const { tutorial } = this.props;

    return (
      <li className="tutorial-items row">
      <span className="rs-name col-4">{tutorial.name}</span>
      <a href={tutorial.url} classname="col-4" rel="noopener noreferrer" target="_blank">{tutorial.url}</a>
      </li>
    );
  }
}

export default Tutorials;
