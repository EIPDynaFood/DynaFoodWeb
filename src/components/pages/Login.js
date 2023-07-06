import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Login.css';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <>
      <div className="container">
        <img src={require('../../images/newmeow5.png')} alt="Logo" className="logo" />
        <input
          placeholder="Email"
          className="input"
          type="email"
        />
        <input
          placeholder="Password"
          className="input"
          type="password"
        />
        <button className="primaryButtonStyle">Login</button>
        <button className="secondaryButtonStyle">Register</button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link="/home"
        >
          Register
        </Button>
        <Link
          to='/register'
          className='nav-links'
        >
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Login;
