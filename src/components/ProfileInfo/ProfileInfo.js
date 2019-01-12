import React from 'react';
import './ProfileInfo.scss';

class ProfileInfo extends React.Component {
  render() {
    const { profile, commits } = this.props;
    return (
      <div className="ProfileInfo col">
        {/* <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img> */}
        {/* <h2 className="card-title">{profile.login}</h2> */}
        {/* <p className="card-text">{profile.bio}</p> */}
        {/* <a href={profile.html_url} className="_blank">{profile.url}</a> */}
      </div>,
      <h2>{commits}</h2>
    );
  }
}
export default ProfileInfo;
