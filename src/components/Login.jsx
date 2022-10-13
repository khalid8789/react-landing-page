import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='container'>
      <section className='login'>
        <div className="overlay">
          <form action="" className="form">
            <div className="push">
            <input type="email" name='email' id='email' placeholder='Enter Your Email' required />
            <input type="password" name='password' id='password' placeholder='Enter Your Password' required />
            <button className='submit' type='Submit'> Sign In</button>

          <h2>Dont't have an account?</h2>
          <a href="#"><Link to='/SignUp'>Sign Up Now!</Link></a>            
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Login