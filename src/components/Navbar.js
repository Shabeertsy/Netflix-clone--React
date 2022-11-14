import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-icon'>
<img className='netflix-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      </div>
      <div >
<a className='navbar-links-home' href="">Home</a>
<a className='navbar-links' href="">TV Shows</a>
<a className='navbar-links' href="">Movies</a>
<a className='navbar-links' href="">MyList</a>
      </div>
    </div>
  )
}
export default Navbar
