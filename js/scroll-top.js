const scrollTopBtn = document.getElementById('scroll-top-btn');

splitHeroTitleIntoLetters();

if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('hidden', window.scrollY <= 300);
  });

  scrollTopBtn.addEventListener('click', () => {
    if (scrollTopBtn.disabled) return;
    launchRocket(scrollTopBtn);
  });
}

function launchRocket(btn) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

  if (prefersReducedMotion) return;

  const FLIGHT_MS = 900;
  const EXPLOSION_MS = 700;

  btn.disabled = true;
  btn.classList.add('launching');

  const rocket = document.createElement('div');
  rocket.className = 'scroll-rocket';
  rocket.setAttribute('aria-hidden', 'true');
  rocket.innerHTML = `
    <span class="speed-line speed-line-a"></span>
    <span class="speed-line speed-line-b"></span>
    <span class="speed-line speed-line-c"></span>
    <span class="speed-line speed-line-d"></span>
    <svg class="rocket-svg" viewBox="0 0 60 130" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rocketBodyGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#6b7280" />
          <stop offset="45%" stop-color="#e5e7eb" />
          <stop offset="58%" stop-color="#f9fafb" />
          <stop offset="100%" stop-color="#9ca3af" />
        </linearGradient>
        <linearGradient id="rocketFlameGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff3b0" />
          <stop offset="35%" stop-color="#fbbf24" />
          <stop offset="70%" stop-color="#f97316" />
          <stop offset="100%" stop-color="#ea580c" />
        </linearGradient>
      </defs>

      <path d="M14 78 L2 102 L18 90 Z" fill="#6b7280" />
      <path d="M46 78 L58 102 L42 90 Z" fill="#6b7280" />

      <path
        d="M30 2 C40 18 44 40 44 64 L44 88 L16 88 L16 64 C16 40 20 18 30 2 Z"
        fill="url(#rocketBodyGrad)"
        stroke="#374151"
        stroke-width="1.5"
      />

      <circle cx="30" cy="42" r="7" fill="#38bdf8" stroke="#1e3a5f" stroke-width="1.5" />

      <g class="rocket-flame">
        <path
          d="M20 88 C20 100 24 112 30 122 C36 112 40 100 40 88 Z"
          fill="url(#rocketFlameGrad)"
        />
        <path
          class="rocket-flame-inner"
          d="M25 88 C25 98 27 106 30 114 C33 106 35 98 35 88 Z"
          fill="#fff3b0"
          opacity="0.85"
        />
      </g>
    </svg>
  `;
  document.body.appendChild(rocket);

  // Doble rAF para forzar el estado inicial antes de animar (si no, la
  // transición de "flying" puede aplicarse de golpe sin transición visible).
  requestAnimationFrame(() => {
    requestAnimationFrame(() => rocket.classList.add('flying'));
  });

  setTimeout(() => {
    rocket.classList.add('arrived');

    const moon = document.createElement('div');
    moon.className = 'scroll-moon';
    moon.textContent = '🌕';
    moon.setAttribute('aria-hidden', 'true');

    const boom = document.createElement('div');
    boom.className = 'scroll-boom';
    boom.textContent = '💥';
    boom.setAttribute('aria-hidden', 'true');

    document.body.append(moon, boom);
    blastHeroTitle();

    setTimeout(() => {
      rocket.remove();
      moon.remove();
      boom.remove();
      btn.disabled = false;
      btn.classList.remove('launching');
    }, EXPLOSION_MS);
  }, FLIGHT_MS);
}

// Envuelve cada letra del título del hero en un <span> para poder animarlas
// individualmente cuando el cohete explota arriba.
function splitHeroTitleIntoLetters() {
  const heroTitle = document.querySelector('.hero h1');
  if (!heroTitle || heroTitle.dataset.split === 'true') return;

  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  heroTitle.dataset.split = 'true';

  [...text].forEach((char) => {
    const letter = document.createElement('span');
    letter.className = 'hero-letter';
    letter.innerHTML = char === ' ' ? '&nbsp;' : char;
    heroTitle.appendChild(letter);
  });
}

// Empuja las letras del título hacia la izquierda, como si la explosión
// (que ocurre a la derecha, arriba) fuera la fuente de la onda expansiva:
// entre más a la derecha está la letra, más lejos y más fuerte se mueve.
function blastHeroTitle() {
  const letters = document.querySelectorAll('.hero-letter');
  if (!letters.length) return;

  const total = letters.length;

  letters.forEach((letter, index) => {
    const proximityToBlast = (index + 1) / total; // 0 (izq) -> 1 (der)
    const distance = 24 + proximityToBlast * 90; // px
    const delay = (total - index) * 6; // ms, arranca por la derecha

    letter.style.setProperty('--blast-x', `${distance}px`);
    letter.style.animationDelay = `${delay}ms`;

    // Reinicia la animación para que funcione en clicks repetidos.
    letter.classList.remove('letter-blast');
    void letter.offsetWidth;
    letter.classList.add('letter-blast');
  });
}
