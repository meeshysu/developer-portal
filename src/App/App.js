import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/Auth';
import connection from '../Helpers/Data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import authRequests from '../Helpers/Data/authRequests';
import AddStudyMaterial from '../components/AddStudyMaterial/AddStudyMaterial';
import MaterialList from '../components/MaterialListSection/MaterialListSection';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import GitHubApiRequest from '../Helpers/Data/GitHubApiRequest';
import TutorialsRequest from '../Helpers/Data/Requests/TutorialsRequest';
import ResourcesRequest from '../Helpers/Data/Requests/ResourcesRequest';
import BlogsRequest from '../Helpers/Data/Requests/BlogsRequest';
import PodcastRequest from '../Helpers/Data/Requests/PodcastsRequest';
import './App.scss';


class App extends Component {
  state = {
    authed: false,
    github_username: '',
    resources: [],
    tutorials: [],
    blogs: [],
    podcasts: [],
  }

  componentDidMount() {
    connection();
    TutorialsRequest.getTutorialData()
      .then((tutorials) => {
        this.setState({ tutorials });
      })
      .catch(error => console.error(error));
    ResourcesRequest.getResourceData()
      .then((resources) => {
        this.setState({ resources });
      })
      .catch(error => console.error(error));
    BlogsRequest.getBlogData()
      .then((blogs) => {
        this.setState({ blogs });
      })
      .catch(error => console.error(error));
    PodcastRequest.getPodcastData()
      .then((podcasts) => {
        this.setState({ podcasts });
      })
      .catch(error => console.error(error));

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
        const gitHubUser = this.state.github_username;
        GitHubApiRequest.getProfileFromGitHub(gitHubUser)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = (username) => {
    this.setState({ authed: true, github_username: username });
  };

  deleteResource = (resourceId) => {
    ResourcesRequest.deleteResource(resourceId)
      .then(() => {
        ResourcesRequest.getResourceData()
          .then((resources) => {
            this.setState({ resources });
          });
      })
      .catch(error => console.error(error));
  }

  deleteTutorial = (tutorialId) => {
    TutorialsRequest.deleteTutorial(tutorialId)
      .then(() => {
        TutorialsRequest.getTutorialData()
          .then((tutorials) => {
            this.setState({ tutorials });
          });
      })
      .catch(error => console.error(error));
  }


  updateTutorial = (tutorialId, isCompleted) => {
    TutorialsRequest.updateTutorial(tutorialId, isCompleted)
      .then(() => {
        TutorialsRequest.getTurtorialData()
          .then((tutorials) => {
            tutorials.sort((x, y) => x.isCompleted - y.isCompleted);
            this.setState({ tutorials });
          });
      })
      .catch(err => console.error(err));
  }

  deleteBlog = (blogId) => {
    BlogsRequest.deleteBlog(blogId)
      .then(() => {
        BlogsRequest.getBlogData()
          .then((blogs) => {
            this.setState({ blogs });
          });
      })
      .catch(error => console.error(error));
  }

  deletePodcast = (podcastId) => {
    PodcastRequest.deletePodcast(podcastId)
      .then(() => {
        PodcastRequest.deletePodcast()
          .then((podcasts) => {
            this.setState({ podcasts });
          });
      })
      .catch(error => console.error(error));
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false, github_username: '' });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <div className="row">
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="col">
          <ProfileInfo />
        </div>
        <div className="row">
          <AddStudyMaterial />
        </div>
        <div className="col">
          <MaterialList
            tutorials={this.state.tutorials}
            resources={this.state.resources}
            blogs={this.state.blogs}
            podcasts={this.state.podcasts}
            deleteAResource={this.deleteResource}
            deleteAPodcast={this.deletePodcast}
            deleteATutorial={this.deleteTutorial}
            deleteABlog={this.deleteBlog}
          />
        </div>
      </div>
    );
  }
}

export default App;
