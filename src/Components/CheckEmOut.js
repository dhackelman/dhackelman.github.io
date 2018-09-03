import React, { Component } from 'react';
import FaBasketball from 'react-icons/lib/fa/dribbble';
import FaBomb from 'react-icons/lib/fa/bomb';
import FaPhone from 'react-icons/lib/ti/phone-outline';


class CheckEmOut extends Component {
  render() {
    return (
      <div className='container_Projects'>
        <a href="https://dhackelman.github.io/jersey_history/" target="_blank">
          <FaBasketball size={32} color={'black'} />
          <span className="titles">JerseyApp</span>
        </a>
        <a href="" target="_blank">
          <FaBomb size={32} color={'black'} />
          <span className="titles">Ba-Bomb</span>
        </a>
        <a href="" target="_blank">
          <FaPhone size={32} color={'black'} />
          <span className="titles">Chat-Tastic</span>
        </a>
      </div>
    );
  }
}

export default CheckEmOut;
