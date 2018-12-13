import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/Auth';
import connection from '../Helpers/Data/connection';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import './App.css';

class App extends Component {

  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
      </div>
    );
  }
}

export default App;
