document.documentElement.classList.add('js');

const navToggle = document.querySelector('.site-nav-toggle');
const siteNav = document.querySelector('.site-nav');

const closeNav = () => {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute('aria-expanded', 'false');
  siteNav.classList.remove('is-open');
};

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    siteNav.classList.toggle('is-open', !open);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
}

const consultationStatus = document.querySelector('#consultation-status');

document.querySelectorAll('[data-consultation-cta]').forEach((cta) => {
  cta.addEventListener('click', () => {
    if (consultationStatus) {
      consultationStatus.textContent = 'Consultation scheduling is being connected. For now, this section is ready for your preferred booking or contact link.';
    }
  });
});
