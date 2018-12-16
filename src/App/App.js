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
import './App.scss';


class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
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

  isAuthenticated = () => {
    this.setState({ authed: true });
  };

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
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
          <MaterialList />
        </div>
      </div>
    );
  }
}

export default App;
