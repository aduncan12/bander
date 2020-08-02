import React, {Component} from 'react';

import './App.css'

const genre = ['Blues', 'Country', 'EDM', 'Emo', 'Folk', 'Goth', 'Heavy Metal', 'Hip Hop', 'Indie', 'Industrial', 'Jazz', 'New Wave', 'Pop', 'Prog', 'Punk', 'Pyschedelic', 'Rap', 'Reggae', 'Rock', 'R&B', 'Shoegaze', 'Ska']
let genreList = genre.join("\n");

const distance = [5, 10, 15, 20, 30, 40, 50, 100]
let distanceList = distance.join("\n");

console.log(genreList)

class Filter extends Component {
  render () {
    return (
      <div className="filter-div">
        <div className="genres">
          <p>Genres</p>
          <div className="genres-dropdown">
          <p>{genreList}</p>
          </div>
        </div>

        <div className="filter-text">
          <p>Find artists within </p>
        </div>
        <div className="distances">
          <p>Distance</p>
          <div className="distances-dropdown">
          <p>{distanceList}</p>
          </div>
        </div>

        <div className="filter-text">
          <p>from</p>
        </div>
        <div className="location">
          <p>Location</p>
          <div className="location-dropdown">
          <p>San Francisco</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Filter;
