import React, { useEffect } from 'react';
import Footer from '../Footer';
import img1 from '../../images/logo_frame_invisible.png';
import video1 from '../../images/video-4.mp4';
import { Button } from './../Button';

export default function Download() {

  return (
    <>
      <div>
        <video className='approveVid' src={video1} autoPlay loop muted />
        <div className="parent-container">
          <div className='background'>
            <img src={img1} alt="logo_frame_invisible"/>
            <h2>You can download the app on:</h2>
            <h1>Ios       /      Android</h1>
              <Button
                link="/Home"
              >Ios
              </Button>
              <Button
                link="/Home"
              >Android
              </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

/* const handleDownload = () => {
    const url = '/downloads/your_app_file.apk';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'your_app_file.apk';
    document.body.appendChild(link);
    link.click();
  };
  useEffect(() => {
    handleDownload();
  }, []);*/