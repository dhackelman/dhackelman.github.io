import React, { Component } from 'react';
import FaBasketball from 'react-icons/lib/fa/dribbble';
import FaBicycle from 'react-icons/lib/fa/bicycle';



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
      </div>
    );
  }
}

export default CheckEmOut;
