import React, { useState } from 'react';
import Footer from '../Footer';
import img1 from '../../images/logo_frame_invisible.png';
import video1 from '../../images/video-4.mp4';
import { Button } from './../Button';
import './Download.css';

export default function Download() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  // Function to handle the download based on the selected platform
  const handleDownload = (platform) => {
    if (platform === 'ios') {
      // iOS version
      const url = 'exp://u.expo.dev/update/e5bd7658-7816-4e9b-b240-602915b282ba';
      const link = document.createElement('a');
      link.href = url;
      link.download = 'dyna.apk';
      document.body.appendChild(link);
      link.click();
    } else if (platform === 'android') {
      // Android version
      const url = 'https://we.tl/t-sicyVqHNdI';
      const link = document.createElement('a');
      link.href = url;
      link.download = 'dyna.apk';
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <>
      <div>
        <video className='approveVid' src={video1} autoPlay loop muted />
        <div className="parent-container">
          <div className='background'>
            <img src={img1} alt="logo_frame_invisible" />
            <h2>You can download the app on:</h2>
            <div className="download-buttons">
              <Button
                className={`download-button ${selectedPlatform === 'ios' ? 'selected' : ''}`}
                onClick={() => handleDownload('ios')}
              >
                <i className="fab fa-apple"></i> iOS
              </Button>
              <Button
                className={`download-button ${selectedPlatform === 'android' ? 'selected' : ''}`}
                onClick={() => handleDownload('android')}
              >
                <i className="fab fa-android"></i> Android
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
