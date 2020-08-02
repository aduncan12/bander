import React, {Component} from 'react';
import Filter from './Filter.js';
import Logo from './Logo.js';

import './App.css'

class Header extends Component {
  render () {
    return (
      <div className="header-div">
        <img className="logo"></img>
        <h1>Bander</h1>

        <Filter />
        <Logo />
      </div>
    )
  }
}

export default Header;
