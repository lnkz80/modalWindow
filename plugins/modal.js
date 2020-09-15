function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('vmodal');
  options.closable ? (spanClose = `<span class="modal-close">&times;</span>`) : (spanClose = '');
  modal.insertAdjacentHTML(
    'afterbegin',
    `<div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">${options.title}</span>
          ${spanClose}
        </div>
        <div class="modal-body">
        ${options.content}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm confirm">Ok</button>
          <button type="button" class="btn btn-secondary btn-sm reject">Cancel</button>
        </div>
      </div>
    </div>`
  );

  document.body.appendChild(modal);
  document.querySelector('.modal-window').style.width = options.width;

  return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;

  function open() {
    !closing && $modal.classList.add('open');
  }
  function close() {
    closing = true;
    $modal.classList.remove('open');
    $modal.classList.add('hide');
    setTimeout(() => {
      $modal.classList.remove('hide');
      closing = false;
    }, ANIMATION_SPEED);
  }

  // morebtn
  const morebtn = document.querySelector('button.moreinfo');
  morebtn.addEventListener('click', open);

  // modalbtns
  if (options.closable) {
    const modalClose = $modal.querySelector('span.modal-close');
    modalClose.addEventListener('click', close);
  }

  const modalOverlay = $modal.querySelector('div.modal-overlay');
  modalOverlay.addEventListener('click', close);

  const modalConfirm = $modal.querySelector('button.confirm');
  modalConfirm.addEventListener('click', close);

  const modalReject = $modal.querySelector('button.reject');
  modalReject.addEventListener('click', close);

  // const modalBtns = $modal.querySelectorAll('button');
  // for (let btnItem of modalBtns) {
  //   btnItem.addEventListener('click', close);
  // }

  return {
    test() {
      console.log($modal);
    },
    destroy() {
      delete $modal;
    },
  };
};
