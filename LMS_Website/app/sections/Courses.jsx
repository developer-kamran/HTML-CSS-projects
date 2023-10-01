import React from 'react';

const Course = () => {
  const courses = [
    {
      title: 'Web Development Bootcamp',
      instructor: 'John Doe',
      description:
        'Learn to build responsive and modern websites using HTML, CSS, and JavaScript. Perfect for beginners!',
      rating: 4.8,
      reviews: 1200,
      price: 49.99,
    },
    {
      title: 'Data Science Fundamentals',
      instructor: 'Jane Smith',
      description:
        'Get started with data science and learn essential tools like Python, Pandas, and NumPy.',
      rating: 4.6,
      reviews: 980,
      price: 59.99,
    },
    {
      title: 'Digital Marketing Strategies',
      instructor: 'Alex Johnson',
      description:
        'Discover effective digital marketing techniques to grow your online presence and reach a wider audience.',
      rating: 4.9,
      reviews: 1450,
      price: 39.99,
    },
  ];

  return (
    <section className='py-24 pb-12 ' id='courses'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl  text-gray-900 mb-8 text-center'>
          Our Most Acclaimed Learning Programs
        </h2>
        <div class='flex justify-center'>
          <div class='w-16 h-1 rounded-full bg-pink-500 inline-flex'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          {courses.map((course) => (
            <div
              key={course.title}
              className='bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 pt-4 pb-6 px-2'
            >
              <div className='p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  {course.title}
                </h3>
                <p className='text-sm text-gray-600 mb-4'>
                  Instructor: {course.instructor}
                </p>
                <p className='text-gray-700 mb-6'>{course.description}</p>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-lg font-medium text-pink-500'>
                      ${course.price}
                    </p>
                    <div className='flex items-center mt-2'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='text-pink-500 w-4 h-4 mr-1'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h.01M12 12h.01M19 12h.01M6 5a9 9 0 019 9c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9zm0 0v0'></path>
                      </svg>
                      <p className='text-sm text-gray-600'>
                        {course.rating} ({course.reviews} reviews)
                      </p>
                    </div>
                  </div>
                  <button className='text-white bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600'>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
