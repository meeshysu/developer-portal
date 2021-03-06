import React from 'react';
import './AddStudyMaterial.scss';

class AddStudyMaterial extends React.Component {
  render() {
    return (
      <div className="Form col">
        <h2>Form</h2>
        <form className="">
          <label className="sr-only" htmlFor="name">Name</label>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="title" placeholder="Add new title"/>
          <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="link" placeholder="Add new link"/>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Tutorials
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Resources
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Podcasts
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox"/> Blogs
            </label>
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddStudyMaterial;
