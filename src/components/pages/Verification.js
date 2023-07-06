import React from 'react';
import '../../App.css';
import ApproveSection from '../ApproveSection';
import Footer from '../Footer';

function Verification(props) {

  console.log(props.lang);
  return (
    <>
      <ApproveSection />
      <Footer />
    </>
  );
}

//<Cards />

export default Verification;
