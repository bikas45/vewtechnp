// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Contact form (client-side demo)
  const form = document.getElementById('project-inquiry-form');
  const banner = document.getElementById('form-success-banner');
  if (form && banner) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      banner.hidden = false;
      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      form.reset();
    });
  }
});
