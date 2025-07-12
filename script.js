
const toggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');
const moon = document.getElementById('moon-logo');
const sun = document.getElementById('sun-logo');

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.mobile-nav');
const navItems = document.querySelectorAll('.mobile-nav a');

// Theme-toggle change button functionality
const changeTheme = function () {
    body.classList.toggle('dark-theme');
    moon.style.display = moon.style.display === 'none' ? 'block' : 'none';
    sun.style.display = sun.style.display === 'block' ? 'none' : 'block';
    navLinks.style.backgroundColor = body.classList.contains('dark-theme') ? '#504935' : '#504935';
};

toggle.addEventListener('click', changeTheme);


// Hamburger menu functionality
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
});

// When switching to desktop view, reset hamburguer menu
window.addEventListener('resize', () => {
  if (window.innerWidth > 1150) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// Close menu when clicking a nav item
navItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    body.style.overflow = 'auto';
  });
});


