import React, { Component } from 'react';
import FaBasketball from 'react-icons/lib/fa/dribbble';
import FaBomb from 'react-icons/lib/fa/bomb';
import FaPhone from 'react-icons/lib/ti/phone-outline';
import Modal from 'react-awesome-modal';



class CheckEmOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
  render() {
    return (
      <div className='container_Projects'>
        <a href="https://dhackelman.github.io/jersey_history/">
          <FaBasketball size={32} color={'black'} />
          <span className="titles">JerseyApp</span>
        </a>
        <a onClick={() => this.openModal()}>
          <FaBomb size={32} color={'black'} />
          <span className="titles">Ba-Bomb</span>
        </a>
        <a onClick={() => this.openModal()}>
          <FaPhone size={32} color={'black'} />
          <span className="titles">Chat-Tastic</span>
        </a>
        <Modal
            visible={this.state.visible}
            width="300"
            height="200"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
        >
            <div className="container_Modal">
                <h1>Work In Progress</h1>
                <p>Check again  in a couple days!</p>
                <span onClick={() => this.closeModal()}>Close</span>
            </div>
        </Modal>
      </div>
    );
  }
}

export default CheckEmOut;
