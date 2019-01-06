import React from 'react';

import './Resources.scss';

class Resources extends React.Component {
  render() {
    const { resource } = this.props;

    return (
      <li className="resource-items">
      <span className="rs-name">{resource.name}</span>
      <span className="rs-url">{resource.url}</span>
      <span className="rs-uid">{resource.uid}</span>
      </li>
    );
  }
}

export default Resources;
