const navToggle = document.querySelector('.mobile_nav_toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});

// Slider
const slider = new A11YSlider(document.querySelector('.slider'), {
  dots: true,
  slidesToShow: 1,
  arrows: false,
  responsive: {
    480: {
      dots: false,
    },
    700: {
      slidesToShow: 2,
    },
    960: {
      slidesToShow: 3,
    },
  },
});
