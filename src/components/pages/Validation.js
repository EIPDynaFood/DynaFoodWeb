import React from 'react';
import '../../App.css';
import ValidationSection from '../ValidationSection';
import Footer from '../Footer';

function Verification(props) {

  console.log(props.lang);
  return (
    <>
       <ValidationSection />
      <Footer />
    </>
  );
}

//<Cards />

export default Verification;
