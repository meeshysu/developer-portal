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

class MaterialList extends React.Component {
  static propTypes = {
    podcasts: PropTypes.arrayOf(podcastsShape),
    tutorials: PropTypes.arrayOf(tutorialsShape),
    resources: PropTypes.arrayOf(resourcesShape),
    blogs: PropTypes.arrayOf(blogsShape),
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
      podcasts,
      tutorials,
      resources,
      blogs,
    } = this.props;
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
                <li className="resource-items">
                  <span className="rs-name">{resources.name}</span>
                  <span className="rs-url">{resources.url}</span>
                  <span className="rs-uid">{resources.uid}</span>
                </li>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
              <h4>Tutorials</h4>
              <li className="tutorial-items">
                  <span className="trl-name">{tutorials.name}</span>
                  <span className="trl-url">{tutorials.url}</span>
                  <span className="trl-uid">{tutorials.uid}</span>
                </li>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
              <h4>Blogs</h4>
              <li className="blog-items">
                  <span className="blg-name">{blogs.name}</span>
                  <span className="blg-url">{blogs.url}</span>
                  <span className="blg-uid">{blogs.uid}</span>
                </li>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="6">
              <h4>Podcasts</h4>
              <li className="podcast-items">
                  <span className="pdc-name">{podcasts.name}</span>
                  <span className="pdc-name">{podcasts.url}</span>
                  <span className="pdc-name">{podcasts.uid}</span>
                </li>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default MaterialList;
