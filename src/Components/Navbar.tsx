import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar