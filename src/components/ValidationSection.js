import React from 'react';
import { Button } from './Button';
import './ValidationSection.css';
import img1 from '../images/logo_frame_invisible.png';
import video1 from '../images/video-4.mp4';
import { Link, useHistory } from 'react-router-dom';

function ValidationSection() {

    const history = useHistory();
    const HandlePage = () => {
        history.push('/');
        window.location.reload();
      };
  return (
    <div>
      <video className='approveVid' src={video1} autoPlay loop muted />
      <div className="parent-container">
        <div className='background'>
          <img src={img1} alt="logo_frame_invisible"/>
          <h2>An email has been send to verify your account</h2>
          <h1>Thank you for using our application</h1>
            <Button
              onClick={HandlePage}
            >Back to Homepage<i className='far fa-play-circle' />
            </Button>
        </div>
      </div>
    </div>
  );
}

export default ValidationSection;
