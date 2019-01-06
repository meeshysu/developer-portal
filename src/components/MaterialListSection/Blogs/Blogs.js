import React from 'react';

import './Blogs.scss';

class Blogs extends React.Component {
  render() {
    const { blog } = this.props;

    return (
      <li className="tutorial-items">
      <span className="rs-name">{blog.name}</span>
      <span className="rs-url">{blog.url}</span>
      <span className="rs-uid">{blog.uid}</span>
      </li>
    );
  }
}

export default Blogs;
