const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('show');
});

const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});
