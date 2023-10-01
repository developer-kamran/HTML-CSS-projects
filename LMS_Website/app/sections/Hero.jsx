import React from 'react';

const Hero = () => {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container mx-auto flex py-24 pb-8 px-5 md:flex-row flex-col items-center xl-px-40'>
        <div class='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Empower Your Learning Journey
          </h1>
          <p class='mb-8 leading-relaxed'>
            Unleash your potential through expert-led courses and interactive
            learning tools. Ignite your passion for knowledge and embark on a
            journey to success. Enroll today and unlock a brighter future
          </p>

          <p class='text-sm mt-2 text-gray-500 mb-4 w-full'>
            Knowledge awaits. Enroll now and excel.
          </p>
          <button class='flex text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg'>
            Get Started
          </button>
        </div>
        <div class='lg:max-w-lg lg:w-full  '>
          <img
            class='object-cover object-center rounded'
            alt='hero'
            src='./images/hero.jpg'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
