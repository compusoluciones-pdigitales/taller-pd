const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterFeedback = document.getElementById('newsletter-feedback');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(newsletterEmail.value.trim());

    newsletterFeedback.classList.remove('success', 'error');

    if (isValid) {
      newsletterFeedback.textContent = '¡Gracias por suscribirte! Revisa tu correo para confirmar.';
      newsletterFeedback.classList.add('success');
      newsletterEmail.value = '';
    } else {
      newsletterFeedback.textContent = 'Ingresa un correo electrónico válido.';
      newsletterFeedback.classList.add('error');
    }
  });
}
