import React from 'react';

const CourseCategories = () => {
  const categories = [
    {
      name: 'Programming',
      icon: '👨‍💻',
      link: '/courses/programming',
    },
    {
      name: 'Design',
      icon: '🎨',
      link: '/courses/design',
    },
    {
      name: 'Business',
      icon: '💼',
      link: '/courses/business',
    },
    {
      name: 'Language',
      icon: '🗣️',
      link: '/courses/language',
    },
    {
      name: 'Health & Fitness',
      icon: '💪',
      link: '/courses/health-fitness',
    },
    {
      name: 'Marketing',
      icon: '📈',
      link: '/courses/marketing',
    },
  ];

  const generateContent = (category) => {
    switch (category) {
      case 'Programming':
        return `Explore our ${category} courses and master the art of coding and software development.`;
      case 'Design':
        return `Unleash your creativity with our ${category} courses and learn the essentials of design and visual aesthetics.`;
      case 'Business':
        return `Advance your career with our ${category} courses and gain the skills to succeed in the corporate world.`;
      case 'Language':
        return `Broaden your horizons with our ${category} courses and explore the world through language learning.`;
      case 'Health & Fitness':
        return `Boost your well-being with our ${category} courses and prioritize your health and fitness.`;
      case 'Marketing':
        return `Reach your audience effectively with our ${category} courses and excel in the world of digital marketing.`;
      default:
        return `Discover our ${category} courses and expand your knowledge in this area.`;
    }
  };

  return (
    <section className='text-gray-600 body-font' id='categories'>
      <div className='container px-5 py-24 pb-10 mx-auto '>
        <h2 className='text-3xl  text-gray-900 mb-4 text-center'>
          Browse Courses Categories
        </h2>
        <div class='flex justify-center'>
          <div class='w-16 h-1 rounded-full bg-pink-500 inline-flex'></div>
        </div>
        <div className='flex flex-wrap -m-4 mt-6'>
          {categories.map((category) => (
            <div
              key={category.name}
              className='p-4 md:w-1/3 w-full cursor-pointer'
              onClick={() => (window.location.href = category.link)}
            >
              <div className='h-full bg-gray-100 p-8 rounded-lg'>
                <div className='flex items-center mb-4'>
                  <div className='w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                    {category.icon}
                  </div>
                  <h2 className='text-lg font-medium text-gray-900'>
                    {category.name}
                  </h2>
                </div>
                <p className='leading-relaxed mb-6'>
                  {generateContent(category.name)}
                </p>
                <a className='text-indigo-500 inline-flex items-center'>
                  Explore Courses
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
