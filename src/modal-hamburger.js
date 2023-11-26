(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-hamburger-open]'),
    closeModalBtn: document.querySelector('[modal-hamburger-close]'),
    modal: document.querySelector('[modal-hamburger]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
