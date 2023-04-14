import React from 'react';
import '../../App.css';
import VideoSection from '../VideoSection';
import Footer from '../Footer';

function Home(props) {
  
  console.log(props.lang);
  return (
    <>
      <VideoSection />
      <Footer />
    </>
  );
}

//<Cards />

export default Home;
