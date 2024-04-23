import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            EjemploNavBar
        </div>
        <ul className='navbar-manu'>
            <li><Link to="/AboutUs">About Us</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
