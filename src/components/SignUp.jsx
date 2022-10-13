import React, {useState} from 'react'
import { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {google } from 'react-google-login'
import './SignUp.css'


const SignUp = () => {
    const clientId = ""
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);



    const responseGoogle = () =>{
    setShowLoginButton(false)
    setShowLogoutButton(true)

    }
    const onFailureSucess = ()=>{

    }
    const logout = () =>{
 alert('You Signed Out Successfully')
 setShowLoginButton(true)
 setShowLogoutButton(false)
    }

    const handleFailure = (result) =>{
    alert(result);
    }
  const handleLogin =(googleData) =>{
    console.log(googleData)
  }
  
  return (
    <div className='container'>

<section className='login1'>
        <div className="overlay1">
          <form action="" className="form1">
            <div className="push1">
            <input type="text" name='name' id='name' placeholder='Enter Your Full Name' required />
            <input type="email" name='email' id='email' placeholder='Enter Your Email' required />
            <input type="password" name='password' id='password' placeholder='Enter Your Password' required />
            <input type="password" name='password' id='password' placeholder='Confirm Your Password' required />
            <button className='submit' type='Submit'> Sign Up Now</button>

            <h2>OR</h2>

               <div>
               <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText='Sign Up With Google'
    onSuccess={handleLogin}
    onFailure={handleFailure}
    cookiePolicy={"single_host_policy"}
    ></GoogleLogin>
               </div>

                   
            </div>
          </form>
        </div>
      </section>
      
  

    </div>
  )
}

export default SignUp


