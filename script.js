document.documentElement.classList.add('js');

const navToggle = document.querySelector('.site-nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    siteNav.classList.toggle('is-open', !open);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}

const consultationStatus = document.querySelector('#consultation-status');

document.querySelectorAll('[data-consultation-cta]').forEach((cta) => {
  cta.addEventListener('click', () => {
    if (consultationStatus) {
      consultationStatus.textContent = 'Scheduling integration is being finalized. Consultation booking will be available here shortly.';
    }
  });
});
