import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../Helpers/Data/authRequests';
import './Podcasts.scss';
import podcastShape from '../../../Helpers/propz/podcastsShape';

class Podcasts extends React.Component {
  static propTypes = {
    podcast: podcastShape,
    deleteAPodcast: PropTypes.func,
    updateAPodcast: PropTypes.func,
  }

  updateEvent = (e) => {
    e.preventDefault();
    const { updateAPodcast, blog } = this.props;
    const isCompleted = e.target.checked;
    updateAPodcast(blog.id, isCompleted);
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteAPodcast, podcast } = this.props;
    deleteAPodcast(podcast.id);
  }

  render() {
    const { podcast } = this.props;
    const uid = authRequests.getCurrentUid();
    const deleteButton = () => {
      if (podcast.uid === uid) {
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
      <li className="podcast-items row">
      <span className="rs-name col-4">{podcast.name}</span>
      <a href={podcast.url} className="col-4" rel="noopener noreferrer" target="_blank">{podcast.url}</a>
      {deleteButton()}
      <div className="checkboxContainer">
          <input type="checkbox" value="blog" checked= {podcast.isCompleted} id ={podcast.id} onChange={this.updateEvent}/>
          <label className="label">Completed</label>
      </div>
      </li>
    );
  }
}

export default Podcasts;
