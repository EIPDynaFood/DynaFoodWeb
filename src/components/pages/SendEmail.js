import React, { useState } from 'react';
import Footer from '../Footer';
import './SendEmail.css';
import { Link, useHistory } from 'react-router-dom';
import videoFile from '../../images/video-4.mp4';
import axios from 'axios';

function SendEmail(props) {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("test")
  const config = {
    method: 'get',
    url:  'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/' + 'resetPassword?email=' + `${email}`,
    rejectUnauthorized: false,
};
  axios(config)
    .then(function (response) {
      localStorage.setItem('email', email)
      history.push('/resetCode',{email});
      window.location.reload();
    })
    .catch((error) => {
      alert(error)
  })
  }
  return (
    <>
      <div className='sendemail' id='sendemail'>
        <div className="container">
          <h2>Forgot Password ?</h2>
          <span className='line'></span>
            <div className='content'>
              <h1>Please enter the email you register with</h1>
              <input
                placeholder="Email"
                className="logininput"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="loginprimaryButtonStyle" onClick={handleSubmit}>Reset Password</button>
              <Link to='/login'>
                <button className="loginsecondaryButtonStyle">Back To login Page</button>
              </Link>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SendEmail;
