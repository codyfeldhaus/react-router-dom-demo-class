import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <h1>School Website - React Router Demo</h1>
      <nav className='d-flex justify-content-around'>
        {/* <p>Home</p> */}
        <Link to="/">Home</Link>
        {/* Link for About and Courses */}
        <p>About</p>
        <p>Courses</p>
      </nav>
    </header>
  )
}

export default Header;