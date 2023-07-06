import React from 'react';
import { Button } from './Button';
import './ApproveSection.css';
import img1 from '../images/logo_frame_invisible.png';
import video1 from '../images/video-4.mp4';

function ApproveSection() {
  return (
    <div>
      <video className='approveVid' src={video1} autoPlay loop muted />
      <div className="parent-container">
        <div className='background'>
          <img src={img1} alt="logo_frame_invisible"/>
          <h2>Your account has been verified</h2>
          <h1>Thank you for using our application</h1>
            <Button
              link="/Home"
            >back to Homepage<i className='far fa-play-circle' />
            </Button>
        </div>
      </div>
    </div>
  );
}

export default ApproveSection;
