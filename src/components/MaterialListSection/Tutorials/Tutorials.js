import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../Helpers/Data/authRequests';
import './Tutorials.scss';
import tutorialsShape from '../../../Helpers/propz/tutorialsShape';

class Tutorials extends React.Component {
  static propTypes = {
    tutorial: tutorialsShape,
    deleteATutorial: PropTypes.func,
    updateATutorial: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteATutorial, tutorial } = this.props;
    deleteATutorial(tutorial.id);
  }

  render() {
    const { tutorial } = this.props;
    const uid = authRequests.getCurrentUid();
    const deleteButton = () => {
      if (tutorial.uid === uid) {
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
      <li className="tutorial-items row">
      <span className="rs-name col-4">{tutorial.name}</span>
      <a href={tutorial.url} className="col-4" rel="noopener noreferrer" target="_blank">{tutorial.url}</a>
      {deleteButton()}
      <div className="checkboxContainer">
          <input type="checkbox" value="blog" checked= {tutorial.isCompleted} id ={tutorial.id} onChange={this.updateEvent}/>
          <label className="label">Completed</label>
      </div>
      </li>
    );
  }
}

export default Tutorials;
