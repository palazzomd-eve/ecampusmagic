document.documentElement.classList.add('js');

const navToggle = document.querySelector('.site-nav-toggle');
const siteNav = document.querySelector('#site-nav');

const closeNav = () => {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute('aria-expanded', 'false');
  siteNav.classList.remove('is-open');
};

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
}
