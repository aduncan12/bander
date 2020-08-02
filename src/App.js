import React, {Component} from 'react';
import Queue from './Queue.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import band1 from './images/band1.jpg';


import './App.css'

// const queue = [
//   {
//     bandimg: band1,
//     bandname: "Plainclothesman"
//   }
// ]

const queuename = {
  bandname: "Plainclothesman"
}

const queueimg = {
  bandimg: band1
}

class App extends Component {
  render () {
    return (
      <div className="app-div">
        <Header />
        <div className="main-content">
          <Queue queue={queuename}/>
          <Main />
        </div>
        <Footer />
      </div>
    )
  }
}



export default App;
