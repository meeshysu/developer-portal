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
import getUserRequest from '../Helpers/Data/Requests/ProfileRequest';
import './App.scss';


class App extends Component {
  state = {
    authed: false,
    githubUsername: '',
    profile: [],
    resources: [],
    tutorials: [],
    blogs: [],
    podcasts: [],
  }

  componentDidUpdate() {
    if (this.state.githubUsername && this.state.profile.length === 0) {
      getUserRequest.getRequest(this.state.githubUsername)
        .then((profile) => {
          this.setState({ profile });
        })
        .catch(err => console.error(err));
    }
    if (this.state.githubUsername && this.state.profile.length === 0) {
      getUserRequest.getUserCommit(this.state.githubUsername)
        .then((commits) => {
          this.setState({ commits });
        })
        .catch(err => console.error(err));
    }
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
        const users = sessionStorage.getItem('githubUsername');
        this.setState({
          authed: true,
          githubUsername: users,
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
    authRequests.logoutUser();
  }

  isAuthenticated = (username) => {
    this.setState({ authed: true, githubUsername: username });
    sessionStorage.setItem('githubUserName', username);
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

  updateResource = (resourceId, isCompleted) => {
    ResourcesRequest.updateResource(resourceId, isCompleted)
      .then(() => {
        ResourcesRequest.getResourceData()
          .then((resources) => {
            resources.sort((x, y) => x.isCompleted - y.isCompleted);
            this.setState({ resources });
          });
      })
      .catch(err => console.error(err));
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

  updateBlog = (blogId, isCompleted) => {
    BlogsRequest.updateBlog(blogId, isCompleted)
      .then(() => {
        BlogsRequest.getBlogData()
          .then((blogs) => {
            blogs.sort((x, y) => x.isCompleted - y.isCompleted);
            this.setState({ blogs });
          });
      })
      .catch(err => console.error(err));
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

  updatePodcast = (podcastId, isCompleted) => {
    PodcastRequest.updatePodcast(podcastId, isCompleted)
      .then(() => {
        PodcastRequest.getPodcastData()
          .then((podcasts) => {
            podcasts.sort((x, y) => x.isCompleted - y.isCompleted);
            this.setState({ podcasts });
          });
      })
      .catch(err => console.error(err));
  }

  submitNewMaterial = (newMaterial) => {
    if (newMaterial.type === 'tutorial') {
      TutorialsRequest.postRequest(newMaterial)
        .then(() => {
          TutorialsRequest.getTurtorialData()
            .then((tutorials) => {
              this.setState({ tutorials });
            });
        })
        .catch(err => console.error(err));
    } else if (newMaterial.type === 'resources') {
      ResourcesRequest.postResource(newMaterial)
        .then(() => {
          ResourcesRequest.getResourceData()
            .then((resources) => {
              this.setState({ resources });
            });
        })
        .catch(err => console.error(err));
    } else if (newMaterial.type === 'blog') {
      BlogsRequest.postBlog(newMaterial)
        .then(() => {
          BlogsRequest.getBlogData()
            .then((blogs) => {
              this.setState({ blogs });
            });
        })
        .catch(err => console.error(err));
    } else if (newMaterial.type === 'podcast') {
      PodcastRequest.postPodcast(newMaterial)
        .then(() => {
          PodcastRequest.getPodcastData()
            .then((podcasts) => {
              this.setState({ podcasts });
            });
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false, githubUsername: '' });
    };
    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated} />
        </div>
      );
    }

    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="col">
          <ProfileInfo
            profile={this.state.profile}
            commits={this.state.commits}
          />
        </div>
        <div className="row">
          <AddStudyMaterial onSubmit={this.formSubmitEvent} />
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
            updateAResource={this.updateAResource}
            updateAPodcast={this.updateAPodcast}
            updateABlog={this.updateABlog}
            updateATutorial={this.updateATutorial}
          />
        </div>
      </div>
    );
  }
}

export default App;
