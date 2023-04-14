import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';

function VideoSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <img src='logo_frame_invisible.png' alt="logo_frame_invisible"/>
      <p>a mobile application that allows users to track and evaluate the environmental impact and nutritional value of their groceries.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link="/services"
        >
          Details
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Download the App <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;
