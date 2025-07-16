// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Section navigation (for single-page navigation, optional)
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      document.querySelectorAll('section').forEach(sec => sec.classList.add('hide'));
      targetSection.classList.remove('hide');
      if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
    }
  });
}); 