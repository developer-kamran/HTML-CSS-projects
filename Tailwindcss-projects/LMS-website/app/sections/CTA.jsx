import React from 'react';
import GetStarted from '../components/CTA/GetStarted';
import BecomeInstructor from '../components/CTA/BecomeInstructor';
import MobileApp from '../components/CTA/MobileApp';
import Newsletter from '../components/CTA/Newsletter';

const CTA = () => {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container px-5 py-24 pb-12 mx-auto '>
        <GetStarted />
        <BecomeInstructor />
        <Newsletter />
        <MobileApp />
      </div>
    </section>
  );
};

export default CTA;
