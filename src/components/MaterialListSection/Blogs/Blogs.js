import React from 'react';

import './Blogs.scss';

class Blogs extends React.Component {
  render() {
    const { blog } = this.props;

    return (
      <li className="blog-items row">
      <span className="rs-name col-4">{blog.name}</span>
      <a href={blog.url} classname="col-4" rel="noopener noreferrer" target="_blank">{blog.url}</a>
      </li>
    );
  }
}

export default Blogs;
