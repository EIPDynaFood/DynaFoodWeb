import React from 'react';
import '../App.css';
import { Button } from './Button';
import './VideoSection.css';
import img1 from '../images/logo_frame_invisible.png';
import video1 from '../images/video-4.mp4';

function VideoSection() {

  /*const handleDownload = () => {
    const url = '../images/dyna.apk';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dyna.apk';
    document.body.appendChild(link);
    link.click();
  };*/
  
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <img src={img1} alt="logo_frame_invisible"/>
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


  /*const handleDownloadIOS = () => {
    const url = '../images/dyna.apk';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dynaios';
    document.body.appendChild(link);
    link.click();
  };
  const handleDownloadAPK = () => {
    const url = 'exp://exp.host/@dynafood/dynafoodapp?release-channel=beta';
    const link = document.createElement('b');
    link.href = url;
    link.download = 'dyna.apk';
    document.body.appendChild(link);
    link.click();
  };*/