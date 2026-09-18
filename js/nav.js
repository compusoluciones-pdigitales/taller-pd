// Nav responsive: en móvil los links colapsan detrás de un botón hamburguesa.
// El botón se crea desde JS para no tocar index.html (archivo compartido por
// todas las áreas del taller).
(function () {
  const wrapper = document.querySelector('.nav-wrapper');
  const nav = document.querySelector('.main-nav');
  if (!wrapper || !nav) return;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.id = 'nav-toggle';
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Abrir menú');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'main-nav');
  toggle.innerHTML = '<span class="nav-toggle-bar"></span>' +
    '<span class="nav-toggle-bar"></span>' +
    '<span class="nav-toggle-bar"></span>';

  nav.id = 'main-nav';
  wrapper.insertBefore(toggle, nav);

  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('nav-open'));
  });

  // Al elegir un link el menú estorba: se cierra solo.
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Si se vuelve a ancho de escritorio con el menú abierto, la clase dejaría
  // el nav en un estado raro al regresar a móvil.
  const desktop = window.matchMedia('(min-width: 769px)');
  const onDesktop = function (event) {
    if (event.matches) setOpen(false);
  };
  if (desktop.addEventListener) {
    desktop.addEventListener('change', onDesktop);
  } else {
    desktop.addListener(onDesktop);
  }
})();
