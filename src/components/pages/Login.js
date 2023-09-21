import React, { useState } from 'react';
import Footer from '../Footer';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
  const config = {
    method: 'get',
    url:  'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'login?email=' + `${email}` + '&password=' + `${password}`,
    rejectUnauthorized: false,
};
  axios(config)
    .then(function (response) {
      alert(response.data["token"]);
      localStorage.setItem('token', response.data["token"])
      localStorage.setItem('refresh_token', response.data["refresh_token"])
      history.push('/');
      window.location.reload();
    })
    .catch((error) => {
      alert(error)
  })
  }
  return (
    <>
      <div className="logincontainer">
        <video className='loginVideo' autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div className="loginContent">
          <img src={require('../../images/logo_frame.png')} alt="Logo" className="loginlogo" />
          <input
            placeholder='email'
            className="logininput"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            placeholder='password'
            className="logininput"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="loginprimaryButtonStyle" onClick={handleSubmit}>Login</button>
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
