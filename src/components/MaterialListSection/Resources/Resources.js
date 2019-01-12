import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../Helpers/Data/authRequests';
import './Resources.scss';
import resourcesShape from '../../../Helpers/propz/resourcesShape';

class Resources extends React.Component {
  static propTypes = {
    resource: resourcesShape,
    deleteAResource: PropTypes.func,
    updateAResource: PropTypes.func,
  }

  updateEvent = (e) => {
    e.preventDefault();
    const { updateAResource, blog } = this.props;
    const isCompleted = e.target.checked;
    updateAResource(blog.id, isCompleted);
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteAResource, resource } = this.props;
    deleteAResource(resource.id);
  }

  render() {
    const { resource } = this.props;
    const uid = authRequests.getCurrentUid();
    const deleteButton = () => {
      if (resource.uid === uid) {
        return (
          <div>
            <span className = "col">
            <button className = "btn btn" onClick={this.deleteEvent}>
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
      <a href={resource.url} className="col-4" rel="noopener noreferrer" target="_blank">{resource.url}</a>
      {deleteButton()}
      <div className="checkboxContainer">
          <input type="checkbox" value="blog" checked= {resource.isCompleted} id ={resource.id} onChange={this.updateEvent}/>
          <label className="label">Completed</label>
      </div>
      </li>
    );
  }
}

export default Resources;
