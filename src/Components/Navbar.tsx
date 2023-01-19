import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul className='links'>
            <li>
              <Link className='link' to="/"> Home</Link>
            </li>
            <li>
              <Link className='link' to="/search">Search</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar