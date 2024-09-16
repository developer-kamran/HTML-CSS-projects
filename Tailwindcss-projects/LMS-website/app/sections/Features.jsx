import React from 'react';
import Link from 'next/link';

const Features = () => {
  return (
    <section class='text-gray-600 body-font' id='features'>
      <div class='container px-5 py-24 pb-8 mx-auto'>
        <div class='text-center mb-16'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-10'>
            Features
          </h1>
          <div class='flex justify-center'>
            <div class='w-16 h-1 rounded-full bg-pink-500 inline-flex'></div>
          </div>
        </div>
        <div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
          <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
            <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-10 h-10'
                viewBox='0 0 24 24'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <div class='flex-grow'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
                Smart Learning
              </h2>
              <p class='leading-relaxed text-base'>
                Elevate your skills and knowledge with our carefully curated
                courses that deliver smart, data-driven learning solutions.
              </p>
              <Link
                href='#'
                class='mt-3 text-pink-500 inline-flex items-center'
              >
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
            <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-10 h-10'
                viewBox='0 0 24 24'
              >
                <circle cx='6' cy='6' r='3'></circle>
                <circle cx='6' cy='18' r='3'></circle>
                <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
              </svg>
            </div>
            <div class='flex-grow'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
                Expert Instructor
              </h2>
              <p class='leading-relaxed text-base'>
                Get inspired by industry experts who lead our courses. Benefit
                from their wealth of experience and practical insights.
              </p>
              <Link
                href='#'
                class='mt-3 text-pink-500 inline-flex items-center'
              >
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
            <div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-5 flex-shrink-0'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-10 h-10'
                viewBox='0 0 24 24'
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </svg>
            </div>
            <div class='flex-grow'>
              <h2 class='text-gray-900 text-lg title-font font-medium mb-3'>
                Career Advancement
              </h2>
              <p class='leading-relaxed text-base'>
                Accelerate your career with our career-focused courses. Gain the
                skills and certifications that employers value.
              </p>
              <Link
                href='#'
                class='mt-3 text-pink-500 inline-flex items-center'
              >
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div class='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 my-24'>
          <div class='p-2 sm:w-1/2 w-full '>
            <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                class='text-pink-500 w-6 h-6 flex-shrink-0 mr-4'
                viewBox='0 0 24 24'
              >
                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                <path d='M22 4L12 14.01l-3-3'></path>
              </svg>
              <span class='title-font font-medium'>
                Interactive Learning Platform
              </span>
            </div>
          </div>
          <div class='p-2 sm:w-1/2 w-full'>
            <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                class='text-pink-500 w-6 h-6 flex-shrink-0 mr-4'
                viewBox='0 0 24 24'
              >
                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                <path d='M22 4L12 14.01l-3-3'></path>
              </svg>
              <span class='title-font font-medium'>Expert-Led Courses</span>
            </div>
          </div>
          <div class='p-2 sm:w-1/2 w-full'>
            <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                class='text-pink-500 w-6 h-6 flex-shrink-0 mr-4'
                viewBox='0 0 24 24'
              >
                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                <path d='M22 4L12 14.01l-3-3'></path>
              </svg>
              <span class='title-font font-medium'>
                Diverse Course Selection
              </span>
            </div>
          </div>
          <div class='p-2 sm:w-1/2 w-full'>
            <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                class='text-pink-500 w-6 h-6 flex-shrink-0 mr-4'
                viewBox='0 0 24 24'
              >
                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                <path d='M22 4L12 14.01l-3-3'></path>
              </svg>
              <span class='title-font font-medium'>
                Personalized Learning Experience
              </span>
            </div>
          </div>
          <div class='p-2 sm:w-1/2 w-full'>
            <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                class='text-pink-500 w-6 h-6 flex-shrink-0 mr-4'
                viewBox='0 0 24 24'
              >
                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                <path d='M22 4L12 14.01l-3-3'></path>
              </svg>
              <span class='title-font font-medium'>
                Accessible Anytime, Anywhere
              </span>
            </div>
          </div>
          <div class='p-2 sm:w-1/2 w-full'>
            <div class='bg-gray-100 rounded flex p-4 h-full items-center'>
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                class='text-pink-500 w-6 h-6 flex-shrink-0 mr-4'
                viewBox='0 0 24 24'
              >
                <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                <path d='M22 4L12 14.01l-3-3'></path>
              </svg>
              <span class='title-font font-medium'>
                Supportive Learning Environment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
