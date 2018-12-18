import React from 'react';
import './MaterialListSection.scss';

class MaterialList extends React.Component {
  render() {
    return (
      <div className="MaterialList col">
        <h4>Your Added Materials</h4>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="resources-tab" data-toggle="tab" href="#resources" role="tab" aria-controls="resources" aria-selected="true">Resources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="tutorials-tab" data-toggle="tab" href="#tutorials" role="tab" aria-controls="tutorials" aria-selected="false">Tutorials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="podcasts-tab" data-toggle="tab" href="#podcasts" role="tab" aria-controls="podcasts" aria-selected="false">Podcasts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="blogs-tab" data-toggle="tab" href="#blogs" role="tab" aria-controls="blogs" aria-selected="false">Blogs</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="resources-tab">...</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="tutorials-tab">...</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="podcasts-tab">...</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="blogs-tab">...</div>
        </div>
      </div>
    );
  }
}
export default MaterialList;
