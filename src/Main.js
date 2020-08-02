import React, {Component} from 'react';
import band3 from './images/band3.jpg';

import './App.css'

class Main extends Component {
  render () {
    return (
      <div className="main-div">
        <div className="main-profile">
          <div className="band-main">
            <img className="band-img" src={band3}></img>
            <p className="band-info">Band Name</p>
          </div>
        </div>

        <div className="main-songs">
          <p>Songs</p>
        </div>
      </div>
    )
  }
}

export default Main;
