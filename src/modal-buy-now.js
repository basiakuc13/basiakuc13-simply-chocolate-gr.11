(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-buy-now-open]'),
    closeModalBtn: document.querySelector('[modal-buy-now-close]'),
    modal: document.querySelector('[modal-buy-now]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
