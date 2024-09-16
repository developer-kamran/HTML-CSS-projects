import React from 'react';

const GetStarted = () => {
  return (
    <div class=' Get_Started | flex flex-col md:flex-row md:justify-between justify-start mb-32  '>
      <div className='md:w-3/4'>
        <h2 class='text-xs text-pink-500 tracking-widest font-medium title-font mb-1'>
          Join Millions of Learners
        </h2>
        <h1 class='title-font font-medium text-3xl text-gray-900'>
          Join EduVerse Today and Ignite Your Learning Journey!
        </h1>
        <p class='leading-relaxed mt-4'>
          Discover a vast library of courses and take your skills to new
          heights. Learn from top instructors and achieve your goals.
        </p>
      </div>
      <div className='flex items-center mt-8 md:mt-0'>
        <button class='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-md  '>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
