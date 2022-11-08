import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-icon'>
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="" />
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
