import React from 'react';

import './Podcasts.scss';

class Podcasts extends React.Component {
  render() {
    const { podcast } = this.props;

    return (
      <li className="tutorial-items">
      <span className="rs-name">{podcast.name}</span>
      <span className="rs-url">{podcast.url}</span>
      <span className="rs-uid">{podcast.uid}</span>
      </li>
    );
  }
}

export default Podcasts;
