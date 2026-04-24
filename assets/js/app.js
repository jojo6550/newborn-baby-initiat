import { home }     from '../../pages/home.js';
import { about }    from '../../pages/about.js';
import { programs } from '../../pages/programs.js';
import { contact }  from '../../pages/contact.js';
import { donate }   from '../../pages/donate.js';
import { thankYou } from '../../pages/thank-you.js';

const routes = {
  '/':           home,
  '/about':      about,
  '/programs':   programs,
  '/contact':    contact,
  '/donate':     donate,
  '/thank-you':  thankYou,
};

const app    = document.getElementById('app');
const nav    = document.getElementById('nav');
const burger = document.getElementById('navBurger');
const links  = document.getElementById('navLinks');

function getPath() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return hash.split('?')[0] || '/';
}

function setActiveNav(path) {
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = a.getAttribute('href').replace(/^#/, '') || '/';
    a.classList.toggle('active', href === path);
  });
}

async function navigate() {
  const path = getPath();
  const page = routes[path] ?? routes['/'];

  app.classList.add('page-exit');
  await new Promise(r => setTimeout(r, 180));

  app.innerHTML = page.render();
  app.classList.remove('page-exit');
  void app.offsetHeight; // force reflow
  app.classList.add('page-enter');

  requestAnimationFrame(() => {
    app.classList.remove('page-enter');
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (page.init) page.init();
    initReveal();
    setActiveNav(path);
  });
}

function initReveal() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// Scroll-shrink nav
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Burger toggle
burger.addEventListener('click', () => {
  links.classList.toggle('open');
  burger.classList.toggle('open');
});

// Close mobile nav on any link click
links.addEventListener('click', () => {
  links.classList.remove('open');
  burger.classList.remove('open');
});

window.addEventListener('hashchange', navigate);
navigate();
