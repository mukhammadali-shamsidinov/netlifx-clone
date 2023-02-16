import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div style={{ color: 'white' }}>

      <header>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
          </ul>
        </nav>
        <nav>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-user"></i>
        </nav>
      </header>
    </div>
  )
}

export default Header