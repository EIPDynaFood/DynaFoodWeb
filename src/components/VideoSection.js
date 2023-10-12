import React from 'react';
import '../App.css';
import { Button } from './Button';
import { DetailButton } from './DetailButton';
import './VideoSection.css';
//import img1 from '../images/logo_frame_invisible.png';
import img1 from '../images/logo_frame_new.png'
import video1 from '../images/video-4.mp4';
import translate from './../Translation/Home.json'

function VideoSection() {


  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <img src={img1} alt="logo_frame_invisible"/>
      <p>{translate["Home"][localStorage.getItem("lang")]}</p>
      <div className='hero-btns'>
        <DetailButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          {translate["Details"][localStorage.getItem("lang")]}
        </DetailButton>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          {translate["Download"][localStorage.getItem("lang")]} <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;