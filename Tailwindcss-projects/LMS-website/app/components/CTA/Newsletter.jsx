import React from 'react';

const Newsletter = () => {
  return (
    <div className='Newsletter mt-20  '>
      <div class='flex flex-col text-center w-full pb-8'>
        <h1 class='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
          Signup with our Newsletter
        </h1>
        <p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
          Stay up-to-date with the latest news and offers. Subscribe to our
          newsletter and never miss out on exciting updates!
        </p>
      </div>
      <div class='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 mt-2 sm:px-0 items-end'>
        <div class='relative flex-grow w-full'>
          <label for='email' class='leading-7 text-sm text-gray-600'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            class='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-transparent focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          />
        </div>
        <button class='text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded md:text-lg'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
