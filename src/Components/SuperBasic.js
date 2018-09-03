import React, { Component } from 'react';
import '../App.css';
import ProfilePhoto from './ProfilePhoto';
import InfoAndContact from './InfoAndContact';

class SuperBasic extends Component {
  render() {
    return (
      <div className="SuperBasic">
        <ProfilePhoto />
        <InfoAndContact />
      </div>
    );
  }
}

export default SuperBasic;
