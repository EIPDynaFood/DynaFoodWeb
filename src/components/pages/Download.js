import React, { useState } from 'react';
import Footer from '../Footer';
import { Button } from './../Button';
import './Download.css';

const Download = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  // Function to handle the download based on the selected platform
  const handleDownload = (platform) => {
    if (platform === 'ios') {
      // iOS version
      const url = 'exp://u.expo.dev/update/e5bd7658-7816-4e9b-b240-602915b282ba';
      window.open(url, '_blank');
    } else if (platform === 'android') {
      // Android version
      const url = 'https://we.tl/t-sicyVqHNdI';
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <div className='download-container'>
        <div className='container'>
          <h2>Download DynaFood</h2>
          <span className='line'></span>
          <div className='content'>
            <div className='card'>
              <i className="fab fa-android"></i>
              <p><span>Android</span></p>
              <Button
                className={`download-button ${selectedPlatform === 'android' ? 'selected' : ''}`}
                onClick={() => handleDownload('android')}
              >
                Download Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Download;

/*            <div className='card'>
              <i className="fab fa-apple"></i>
              <p><span>iOS</span></p>
              <Button
                className={`download-button ${selectedPlatform === 'ios' ? 'selected' : ''}`}
                onClick={() => handleDownload('ios')}
              >
                Download Now
              </Button>
            </div>*/
