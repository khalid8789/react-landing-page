import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li><button className='btn-footer'>Home</button></li>
        <li><button className='btn-footer'>Book Now</button></li>
        <li><button className='btn-footer'>Privacy Policy</button></li>
        <li><button className='btn-footer'>Shipping & Return</button></li>
      </ul>
    </footer>
  )
}

export default Footer