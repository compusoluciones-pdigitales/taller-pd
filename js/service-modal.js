(function () {
  const grid = document.getElementById('servicios-grid');
  const modal = document.getElementById('service-modal');
  const modalTitle = document.getElementById('service-modal-title');
  const modalBody = document.getElementById('service-modal-body');
  const modalClose = document.getElementById('service-modal-close');

  if (!grid || !modal) return;

  grid.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h3');
      const description = card.querySelector('p');
      modalTitle.textContent = title ? title.textContent : '';
      modalBody.textContent = description ? description.textContent : '';
      modal.classList.remove('hidden');
    });
  });

  function closeModal() {
    modal.classList.add('hidden');
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
})();
