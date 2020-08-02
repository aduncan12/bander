import React, {Component} from 'react';
import band1 from './images/band1.jpg';
import band2 from './images/band2.jpg'

import './App.css'



class Queue extends Component {
  render () {
    return (
      <div className="queue-div">
        <div className="queue-contents">
          <h5 className="queue-header">On Deck:</h5>
          <div className="queue-preview">
            <img className="queue-img" src={band1}></img>
            {/* <p className="queue-info">Band Name</p> */}
            <p className="queue-info">{this.props.queue.bandname}</p>
          </div>

          <h5 className="queue-header">Opener:</h5>
          <div className="queue-preview">
            <img className="queue-img" src={band2}></img>
            {/* <p className="queue-info">Band Name</p> */}
            <p className="queue-info">{this.props.queue.bandname}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Queue;
