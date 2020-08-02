import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './App.css'

const default_logo = <FontAwesomeIcon icon={faUser} />

class Logo extends Component {
  render () {
    return (
      <div className="logo-div">
        {/* <img className="user-img"></img> */}
        {default_logo}
      </div>
    )
  }
}

export default Logo;
