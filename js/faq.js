// Acordeón de preguntas frecuentes (#faq).
(function () {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    // Estado inicial: todas cerradas.
    question.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      // Cierra los demás items antes de togglear el actual.
      items.forEach(function (other) {
        if (other === item) return;
        other.classList.remove('open');
        const otherQuestion = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
        if (otherAnswer) otherAnswer.setAttribute('aria-hidden', 'true');
      });

      item.classList.toggle('open', !isOpen);
      question.setAttribute('aria-expanded', String(!isOpen));
      answer.setAttribute('aria-hidden', String(isOpen));
    });
  });
})();
