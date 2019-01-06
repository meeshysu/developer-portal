import React from 'react';

import './Podcasts.scss';

class Podcasts extends React.Component {
  render() {
    const { podcast } = this.props;

    return (
      <li className="podcast-items row">
      <span className="rs-name col-4">{podcast.name}</span>
      <a href={podcast.url} classname="col-4" rel="noopener noreferrer" target="_blank">{podcast.url}</a>
      </li>
    );
  }
}

export default Podcasts;
