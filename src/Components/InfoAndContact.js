import React, { Component } from 'react';
import hackelman_photo from '../Images/headshot-min.jpg';
import '../App.css';
import Info from './Info';
import ContactLinks from './ContactLinks';

class InfoAndContact extends Component {
  render() {
    return (
      <div className="container_InfoAndContact">
        <Info />
        <ContactLinks />
      </div>
    );
  }
}

export default InfoAndContact;
