import React from 'react';
import './Form.scss';
import authRequests from '../Helpers/Data/authRequests';


const defaultMaterialForm = {
  name: '',
  url: '',
  uid: '',
  type: '',
  isCompleted: false,
};

class MaterialForm extends React.Component {
  state = {
    newMaterialForm: defaultMaterialForm,
  }

materialStringState = (title, e) => {
  e.preventDefault();
  const materialList = { ...this.state.newMaterialForm };
  materialList[title] = e.target.value;
  this.setState({ newMaterialForm: materialList });
}

titlechange = e => this.formFieldStringState('title', e);

urlchange = e => this.formFieldStringState('url', e);

alternative = (e) => {
  const materialList = { ...this.state.newMaterialForm };
  materialList.type = e.target.value;
  this.setState({ newTrackerForm: materialList });
}

uncheck = () => {
  document.querySelectorAll('.form-check-input:checked')[0].checked = false;
}


formSubmit = (e) => {
  this.uncheck();
  e.preventDefault();
  const { onSubmit } = this.props;
  const list = { ...this.state.newMaterialForm };
  list.uid = authRequests.getCurrentUid();
  onSubmit(list);
  this.setState({ newMaterialForm: defaultMaterialForm });
}

render() {
  const { newMaterialForm } = this.state;

  return (
      <div className="form col">
        <form className="row" id= "add-form" onSubmit={this.formSubmit}>
        <div className= "col-6">
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value= {newMaterialForm.name}
                placeholder="New Material Title"
                onChange={this.titlechange}
                />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="link" className="col-sm-2 col-form-label">Link</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="link"
                placeholder="New Material URL"
                value= {newMaterialForm.url}
                onChange={this.urlchange}
                />
            </div>
          </div>
          </div>
          <div className="col-4">
          <div className="form-check">
            <label className="form-check-label">
            <input
            value="tutorial"
            className="form-check-input"
            type="checkbox"
            onChange={this.changeOption}
            /> Tutorials
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              value="resources"
              onChange={this.changeOption}
              /> Resources
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              value="podcast"
              onChange={this.changeOption}
              /> Podcasts
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
            <input
            className="form-check-input"
            type="checkbox"
            value="blog"
            onChange={this.changeOption}
            /> Blogs
            </label>
          </div>
          </div>
          <div className="col-2">
          <button type="submit" className="btn btn-primary col-1 add-button">+</button>
          </div>
        </form>
      </div>
  );
}
}

export default MaterialForm;
