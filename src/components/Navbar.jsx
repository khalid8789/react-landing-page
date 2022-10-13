import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import './Navbar.css' 


const Navbar = () => {
  return (
    <nav className='navbar'>
      
     <ul className='flex'>
      <div className="desktop"> Cake & Dessert Cafe </div>
        <li>Home</li>
        <li>Company</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

     <button> <Link to='/Login'>Sign In</Link></button>
      
      <div className="navicon">
       <FaBars className='icon'></FaBars>
      </div>
    </nav>
  );
}

export default Navbar;