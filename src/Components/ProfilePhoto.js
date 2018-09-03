import React, { Component } from 'react';
import Background from '../Images/headshot-min.jpg';
import '../App.css';

class ProfilePhoto extends Component {
  render() {
    return (
      <div className="container_ProfilePhoto">
        <div style={{backgroundImage: "url(" + Background + ")"}} />
      </div>
    );
  }
}

export default ProfilePhoto;
