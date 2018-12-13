import React from 'react';
import authRequests from '../../Helpers/Data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {

    })
      .catch(error => console.error('there is an error with auth', error));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default Auth;
