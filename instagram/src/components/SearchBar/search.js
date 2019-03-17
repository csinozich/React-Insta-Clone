import React from 'react'
import InstaLogo from '../../images/iglogo.png'
import Compass from '../../images/compass.png'
import Heart from '../../images/heart.svg'
import Person from '../../images/person.png'
import Camera from '../../images/camera.svg'
import './search.css'


const Search = props => {
  return (
    <div className='search-container'>
      <div className='ig-logos'>
        <img className='camera' alt='camera logo' src={Camera} />
        <img className='logo' alt='insta logo' src={InstaLogo} />
      </div>
      <input className='search-input' type='text' placeholder='Search' onKeyDown={props.searchHandler} />
      <div className='icon-container'>
        <img className='search-icons' alt='compass' src={Compass} />
        <img className='search-icons' alt='heart' src={Heart} />
        <img className='person' alt='person' src={Person} />
      </div>
    </div>
  )
}

export default Search
