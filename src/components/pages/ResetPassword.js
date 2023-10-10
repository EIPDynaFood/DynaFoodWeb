import React, { useState } from 'react';
import Footer from '../Footer';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';

function ResetPassword(props) {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setCode(e.target.value);
  };
  const handleConPasswordChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("test")
  /*const config = {
    method: 'get',
    url:  'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'login?email=' + `${email}` + '&password=' + `${password}`,
    rejectUnauthorized: false,
};
  axios(config)
    .then(function (response) {
      localStorage.setItem('token', response.data["token"])
      localStorage.setItem('refresh_token', response.data["refresh_token"])
      history.push('/');
      window.location.reload();
    })
    .catch((error) => {
      alert(error)
  })*/
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
            placeholder="Code"
            className="logininput"
            type="text"
            id="email"
            name="email"
            value={code}
            onChange={handleCodeChange}
          />
          <input
            placeholder="Password"
            className="logininput"
            type="password"
            id="password"
            name="password"
            value={conPassword}
            onChange={handlePasswordChange}
          />
          <input
            placeholder="ConPassword"
            className="logininput"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleConPasswordChange}
          />
          <button className="loginprimaryButtonStyle" onClick={handleSubmit}>Reset Password</button>
          <Link to='/login'>
            <button className="loginsecondaryButtonStyle">Back To login Page</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ResetPassword;
