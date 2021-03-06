import React from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import './MaterialListSection.scss';
import podcastsShape from '../../Helpers/propz/podcastsShape';
import tutorialsShape from '../../Helpers/propz/tutorialsShape';
import blogsShape from '../../Helpers/propz/blogsShape';
import resourcesShape from '../../Helpers/propz/resourcesShape';
import Tutorials from './Tutorials/Tutorials';
import Resources from './Resources/Resources';
import Blogs from './Blogs/Blogs';
import Podcasts from './Podcasts/Podcasts';

class MaterialList extends React.Component {
  static propTypes = {
    podcasts: PropTypes.arrayOf(podcastsShape),
    tutorials: PropTypes.arrayOf(tutorialsShape),
    resources: PropTypes.arrayOf(resourcesShape),
    blogs: PropTypes.arrayOf(blogsShape),
    deleteAResource: PropTypes.func,
    deleteATutorial: PropTypes.func,
    deleteABlog: PropTypes.func,
    deleteAPodcast: PropTypes.func,
    updateAResource: PropTypes.func,
    updateATutorial: PropTypes.func,
    updateAPodcast: PropTypes.func,
    updateABlog: PropTypes.func,
    isCompleted: PropTypes.bool,
    completedResource: PropTypes.bool,
    completedTutorial: PropTypes.bool,
    completedPodcast: PropTypes.bool,
    completedBlog: PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const {
      tutorials,
      deleteATutorial,
      updateATutorial,
      completedTutorial,
    } = this.props;
    const tutorialsItemComponent = tutorials.map(tutorial => (
      <Tutorials
        tutorial={tutorial}
        key={tutorial.id}
        deleteATutorial={deleteATutorial}
        updateATutorial={updateATutorial}
        completedTutorial={completedTutorial}
      />
    ));

    const {
      resources,
      deleteAResource,
      updateAResource,
      completedResource,
    } = this.props;
    const resourcesItemComponent = resources.map(resource => (
      <Resources
        resource={resource}
        key={resource.id}
        deleteAResource={deleteAResource}
        updateAResource={updateAResource}
        completedResource={completedResource}
      />
    ));

    const {
      blogs,
      deleteABlog,
      updateABlog,
      completedBlog,
    } = this.props;
    const blogItemComponent = blogs.map(blog => (
      <Blogs
        blog={blog}
        key={blog.id}
        deleteABlog={deleteABlog}
        updateABlog= {updateABlog}
        completedBlog={completedBlog}
      />
    ));

    const {
      podcasts,
      deleteAPodcast,
      updateAPodcast,
      completedPodcast,
    } = this.props;
    const podcastItemComponent = podcasts.map(podcast => (
      <Podcasts
        podcast={podcast}
        key={podcast.id}
        deleteAPodcast={deleteAPodcast}
        updateAPodcast={updateAPodcast}
        completedPodcast={completedPodcast}
      />
    ));

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Tutorials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Podcasts
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Resources</h4>
                <ul>{resourcesItemComponent}</ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <h4>Tutorials</h4>
                <ul>{tutorialsItemComponent}</ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <h4>Blogs</h4>
                <ul>{blogItemComponent}</ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="6">
                <h4>Podcasts</h4>
                <ul>{podcastItemComponent}</ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default MaterialList;
