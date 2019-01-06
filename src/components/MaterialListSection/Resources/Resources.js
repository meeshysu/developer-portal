import React from 'react';
import authRequests from '../../../Helpers/Data/authRequests';
import './Resources.scss';

class Resources extends React.Component {
  render() {
    const { resource } = this.props;
    const uid = authRequests.getCurrentUid();
    const deleteButton = () => {
      if (resource.uid === uid) {
        return (
          <div>
            <span className = "col">
            <button className = "btn btn">
            <i className="fas fa-minus-circle"></i>
            </button>
            </span>
          </div>
        );
      }
      return <span className = "col-2"></span>;
    };
    return (
      <li className="resource-items row">
      <span className="rs-name col-4">{resource.name}</span>
      <a href={resource.url} classname="col-4" rel="noopener noreferrer" target="_blank">{resource.url}</a>
      {deleteButton()}
      </li>
    );
  }
}

export default Resources;
