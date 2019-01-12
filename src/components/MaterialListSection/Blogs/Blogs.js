import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../../Helpers/Data/authRequests';
import './Blogs.scss';
import blogShape from '../../../Helpers/propz/blogsShape';

class Blogs extends React.Component {
  static propTypes = {
    blog: blogShape,
    deleteABlog: PropTypes.func,
    updateABlog: PropTypes.func,
  }

  updateEvent = (e) => {
    e.preventDefault();
    const { updateABlog, blog } = this.props;
    const isCompleted = e.target.checked;
    updateABlog(blog.id, isCompleted);
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
      <div className="checkboxContainer">
          <input type="checkbox" value="blog" checked= {blog.isCompleted} id ={blog.id} onChange={this.updateEvent}/>
          <label className="label">Completed</label>
      </div>
      </li>
    );
  }
}

export default Blogs;
