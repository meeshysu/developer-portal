import React from 'react';

import './Resources.scss';

class Resources extends React.Component {
  render() {
    const { resource } = this.props;

    return (
      <li className="resource-items row">
      <span className="rs-name col-4">{resource.name}</span>
      <a href={resource.url} classname="col-4" rel="noopener noreferrer" target="_blank">{resource.url}</a>
      </li>
    );
  }
}

export default Resources;
