// Avatar central de "Nuestras marcas": generado con blobatar
// (https://github.com/Alain00/blobatar) con shape "nub" (traits.shape 0.745) y hue 140.
//
// El seguimiento del cursor con los ojos y el efecto de hover son propios de
// este proyecto (CSS/JS directo, sin depender de motion.css/gaze.css de la
// librería): esos archivos requieren variables internas sin documentar
// (--mo-track-travel) y quedan "atascados" en 0 al usarse fuera de un
// componente de React/Vue, así que no eran confiables en vanilla JS.
(async () => {
  const NAME = 'Taller PD';
  const target = document.getElementById('brand-avatar');
  if (!target) return;

  try {
    const { blobatar } = await import('https://esm.sh/blobatar');

    target.innerHTML = blobatar(NAME, {
      size: 88,
      background: 'circle',
      title: 'Avatar del taller',
      traits: { shape: 0.745 }, // shape: nub
      hue: 140
    });

    const svg = target.querySelector('svg');
    const groups = svg.querySelectorAll(':scope > g');
    const eyesGroup = groups[groups.length - 1];
    eyesGroup.style.transition = 'transform 0.08s ease-out';

    // Los ojos siguen el cursor en toda la página.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      const MAX_OFFSET = 4; // unidades del viewBox (0-100)
      let ticking = false;
      let lastX = 0;
      let lastY = 0;

      const applyGaze = () => {
        ticking = false;
        const rect = eyesGroup.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = lastX - cx;
        const dy = lastY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, dist / 200);
        const ox = (dx / dist) * MAX_OFFSET * reach;
        const oy = (dy / dist) * MAX_OFFSET * reach;
        eyesGroup.style.transform = `translate(${ox.toFixed(2)}px, ${oy.toFixed(2)}px)`;
      };

      window.addEventListener(
        'pointermove',
        (e) => {
          lastX = e.clientX;
          lastY = e.clientY;
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(applyGaze);
          }
        },
        { passive: true }
      );
    }

    target.addEventListener('click', () => explodeAvatar(target));
  } catch (err) {
    console.error('No se pudo cargar el avatar de blobatar:', err);
    target.textContent = 'PD';
  }
})();

// Efecto de "explosión" al hacer click: un anillo + partículas cubren la
// pantalla y, al terminar la animación, el avatar se oculta.
function explodeAvatar(target) {
  if (target.dataset.exploded) return;
  target.dataset.exploded = 'true';

  const rect = target.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const overlay = document.createElement('div');
  overlay.className = 'avatar-explosion';
  overlay.style.left = `${cx}px`;
  overlay.style.top = `${cy}px`;

  const ring = document.createElement('div');
  ring.className = 'avatar-explosion-ring';
  overlay.appendChild(ring);

  const PARTICLES = 12;
  for (let i = 0; i < PARTICLES; i++) {
    const angle = (i / PARTICLES) * Math.PI * 2;
    const particle = document.createElement('span');
    particle.className = 'avatar-explosion-particle';
    particle.style.setProperty('--angle-x', Math.cos(angle).toFixed(3));
    particle.style.setProperty('--angle-y', Math.sin(angle).toFixed(3));
    overlay.appendChild(particle);
  }

  document.body.appendChild(overlay);

  ring.addEventListener(
    'animationend',
    () => {
      overlay.remove();
      target.classList.add('avatar-hidden');
    },
    { once: true }
  );
}
