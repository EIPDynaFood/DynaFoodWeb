import React from 'react';
import Footer from '../Footer';
import './Register.css';
import video1 from '../../images/video-4.mp4';

function Register(props) {
  return (
    <>
      <div className="registercontainer">
        <video className='registerVideo' src={video1} autoPlay loop muted />
        <div className="registerContent">
          <img src={require('../../images/logo_frame.png')} alt="Logo" className="registerlogo" />
          <input
            placeholder="Full Name"
            className="registerinput"
            type="text"
          />
          <input
            placeholder="Email"
            className="registerinput"
            type="email"
          />
          <input
            placeholder="Password"
            className="registerinput"
            type="password"
          />
          <input
            placeholder="Confirm Password"
            className="registerinput"
            type="password"
          />
          <button className="registerprimaryButtonStyle">Register</button>
          <p className="registerText">Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
