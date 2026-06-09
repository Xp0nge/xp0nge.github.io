document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Drops open menu on mobile clicking interactions
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Automatically collapses mobile slide drawer menu overlay if link is tapped
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
