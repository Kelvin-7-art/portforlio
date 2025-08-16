/* ================= MENU TOGGLE ================= */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('glow');
});

/* ================= BUTTON GLOW ANIMATION ================= */
const buttons = document.querySelectorAll('.btn, .btn.small');

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.boxShadow = '0 0 20px #00fff7, 0 0 40px #ff00ff';
    button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = '';
    button.style.transform = 'scale(1)';
  });
});

/* ================= NAV LINK HOVER GLOW ================= */
const navItems = document.querySelectorAll('.nav-links li a');

navItems.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = '0 0 15px #00fff7, 0 0 25px #ff00ff';
  });
  link.addEventListener('mouseleave', () => {
    if (!link.classList.contains('active')) {
      link.style.textShadow = '';
    }
  });
});

/* ================= OPTIONAL: HERO IMAGE FLOAT ================= */
const heroImage = document.querySelector('.hero-image img');

if (heroImage) {
  let direction = 1;
  setInterval(() => {
    heroImage.style.transform = `translateY(${direction * 5}px)`;
    direction *= -1;
  }, 2000);
}
