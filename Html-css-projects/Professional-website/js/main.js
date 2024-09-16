// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    // Get elements
    const groupHeader = e.target.closest('.faq-group-header');
    if (!groupHeader) return;
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-minus');
    icon.classList.toggle('fa-plus');

    // Toggle visibility
    groupBody.classList.toggle('open');

    const faqGroups = faqContainer.querySelectorAll('.faq-group');

    for (const faqGroup of faqGroups) {
      const otherGroupBody = faqGroup.querySelector('.faq-group-body');
      const otherIcon = faqGroup.querySelector('.faq-group-header i');

      if (faqGroup !== group) {
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    }
  });
});

const hamburgerBtn = document.getElementById('hamburger-button');
const hamburgerIcon = hamburgerBtn.querySelector('i');

hamburgerBtn.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
  hamburgerIcon.classList.toggle('fa-close');
});
