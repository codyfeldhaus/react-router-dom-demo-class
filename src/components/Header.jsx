import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='mb-3'>
      <h1>School Website - React Router Demo</h1>
      <nav className='d-flex justify-content-around'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
      </nav>
    </header>
  )
}

export default Header;