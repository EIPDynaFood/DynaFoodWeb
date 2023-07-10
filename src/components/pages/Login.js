import React from 'react';
import Footer from '../Footer';
import './Login.css';
import { Link } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';

function Login(props) {
  return (
    <>
      <div className="logincontainer">
        <video className='loginVideo' autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="loginContent">
          <img src={require('../../images/logo_frame.png')} alt="Logo" className="loginlogo" />
          <input
            placeholder="Email"
            className="logininput"
            type="email"
          />
          <input
            placeholder="Password"
            className="logininput"
            type="password"
          />
          <button className="loginprimaryButtonStyle">Login</button>
          <Link to='/register'>
            <button className="loginsecondaryButtonStyle">Register</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
