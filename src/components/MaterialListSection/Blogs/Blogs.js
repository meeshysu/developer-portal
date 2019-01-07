import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../Helpers/Data/authRequests';
import './Blogs.scss';

class Blogs extends React.Component {
  static propTypes = {
    deleteABlog: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteABlog, blog } = this.props;
    deleteABlog(blog.id);
  }

  render() {
    const { blog } = this.props;
    const uid = authRequests.getCurrentUid();
    const deleteButton = () => {
      if (blog.uid === uid) {
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
      <li className="blog-items row">
      <span className="rs-name col-4">{blog.name}</span>
      <a href={blog.url} className="col-4" rel="noopener noreferrer" target="_blank">{blog.url}</a>
      {deleteButton()}
      </li>
    );
  }
}

export default Blogs;
