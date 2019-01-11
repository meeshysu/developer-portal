import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../Helpers/Data/authRequests';
import './Auth.scss';

// let user = '';
class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then((res) => {
      // user = res.additionalUserInfo.username;
      this.props.isAuthenticated();
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

// const getUserName = () => user;

export default Auth;
// export { getUserName };
