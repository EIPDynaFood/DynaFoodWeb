import React, { useEffect } from 'react';
import Footer from '../Footer';

export default function Download() {

  const handleDownload = () => {
    const url = '/downloads/your_app_file.apk';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'your_app_file.apk';
    document.body.appendChild(link);
    link.click();
  };
  useEffect(() => {
    handleDownload();
  }, []);

  return (
    <>
      <Footer/>
    </>
  );
}

