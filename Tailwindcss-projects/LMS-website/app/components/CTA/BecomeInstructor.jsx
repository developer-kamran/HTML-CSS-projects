import React from 'react';

const BecomeInstructor = () => {
  return (
    <div className='bg-gray-100 py-12 mb-32' id='b_instructor'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-4'>
          Become an Instructor
        </h2>
        <p className='text-gray-600 mb-6'>
          Are you an expert in your field? Share your knowledge and passion by
          becoming an instructor on our platform. Help students from around the
          world learn and grow.
        </p>
        <a
          href='#'
          className='inline-block bg-pink-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out'
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default BecomeInstructor;
