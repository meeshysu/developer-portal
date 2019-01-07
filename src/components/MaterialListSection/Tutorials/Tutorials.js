import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../Helpers/Data/authRequests';
import './Tutorials.scss';

class Tutorials extends React.Component {
  static propTypes = {
    deleteATutorial: PropTypes.func,
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
      <a href={tutorial.url} classname="col-4" rel="noopener noreferrer" target="_blank">{tutorial.url}</a>
      {deleteButton()}
      </li>
    );
  }
}

export default Tutorials;
