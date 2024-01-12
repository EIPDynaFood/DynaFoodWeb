import React, { useState } from 'react';
import Footer from '../Footer';
import { Button } from './../Button';
import './Download.css';
import axios from 'axios';

const Download = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const config = {
    method: 'get',
    url: 'http://x2024dynafood545437452001.westeurope.cloudapp.azure.com:8081/download',
    responseType: 'blob', // Indique à axios de traiter la réponse comme un objet Blob
    rejectUnauthorized: false,
  };
  
  // Fonction pour gérer le téléchargement en fonction de la plateforme sélectionnée
  const handleDownload = (platform) => {
    if (platform === 'ios') {
      // Version iOS
      const url = 'exp://u.expo.dev/update/e5bd7658-7816-4e9b-b240-602915b282ba';
      window.open(url, '_blank');
    } else if (platform === 'android') {
      // Version Android
      axios(config)
        .then(function (response) {
          // Créer un objet Blob à partir de la réponse
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
  
          // Créer un objet URL à partir du Blob
          const url = window.URL.createObjectURL(blob);
  
          // Créer un lien de téléchargement
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Dynafood.apk'); // Remplacez 'nom-du-fichier' par le nom souhaité
          document.body.appendChild(link);
  
          // Déclencher le clic sur le lien pour commencer le téléchargement
          link.click();
  
          // Supprimer le lien après le téléchargement
          document.body.removeChild(link);
        })
        .catch((error) => {
          alert(error.response.data.Error);
        });
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
