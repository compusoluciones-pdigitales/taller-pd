// Ejemplo fuera de la lista del taller — solo para probar el tracker "Progreso del taller".
// Feature: año dinámico en el footer.
(function () {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
