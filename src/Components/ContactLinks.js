import React, { Component } from 'react';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';


class ContactLinks extends Component {
  render() {
    return (
      <div className='container_Icons'>
        <a href="mailto:drew.hackelman@gmail.com" target="_blank">
          <FaEnvelopeSquare size={32} color={'black'} />
        </a>
        <a href="https://github.com/dhackelman" target="_blank">
          <FaGithubSquare size={32} color={'black'} />
        </a>
        <a href="https://www.linkedin.com/in/dhackelman" target="_blank">
          <FaLinkedinSquare size={32}  color={'black'}/>
        </a>
      </div>
    );
  }
}

export default ContactLinks;
