(function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (!navToggle || !mainNav) return;

  function closeNav() {
    mainNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleNav() {
    const isOpen = mainNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  }

  navToggle.addEventListener('click', toggleNav);

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = mainNav.contains(event.target) || navToggle.contains(event.target);
    if (!clickedInsideNav) {
      closeNav();
    }
  });
})();
