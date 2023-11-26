(() => {
  const refs = {
    openModalBtn: document.querySelector('[leave-review-open]'),
    closeModalBtn: document.querySelector('[leave-review-close]'),
    modal: document.querySelector('[leave-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
