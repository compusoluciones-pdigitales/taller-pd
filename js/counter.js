const statsSection = document.getElementById('stats');
const statNumbers = document.querySelectorAll('.stat-number');
const ANIMATION_DURATION_MS = 1500;

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / ANIMATION_DURATION_MS, 1);
    el.textContent = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(step);
}

if (statsSection && statNumbers.length) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statNumbers.forEach(animateCounter);
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}
