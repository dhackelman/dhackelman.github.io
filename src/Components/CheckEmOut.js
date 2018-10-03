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
        <a href="https://jerseynumnum.com/" target="_blank">
          <FaBasketball size={32} color={'black'} />
          <span className="titles">JerseyNumNum</span>
        </a>        
        <a href="https://kingsofbicycles.com/" target="_blank">
          <FaBicycle size={32} color={'black'} />
          <span className="titles">KingOfBicycles</span>
        </a>
      </div>
    );
  }
}

export default CheckEmOut;
