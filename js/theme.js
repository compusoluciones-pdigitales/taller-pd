(function () {
  const STORAGE_KEY = 'theme-preference';
  const toggleBtn = document.getElementById('dark-mode-toggle');

  function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
  }

  const savedPreference = localStorage.getItem(STORAGE_KEY);
  applyTheme(savedPreference === 'dark');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    });
  }
})();