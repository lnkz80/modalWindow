function _createModal(options) {
  const modal = document.createElement('div');
  modal.classList.add('amodal');
  options.closable ? (x = '<span class="modal-close">&times;</span>') : (x = '');
  modal.insertAdjacentHTML(
    'afterbegin',
    `<div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">${options.title}</span>
          ${x}
        </div>
        <div class="modal-body">
          ${options.content}
        </div>
        <div class="modal-footer">
          <button>Ok</button>
          <button>Cancel</button>
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
  const elClose = document.querySelector('.modal-close');
  const elOverlay = document.querySelector('.modal-overlay');
  const objClass = document.querySelector('.' + options.objClass);
  open = () => {
    !closing && $modal.classList.add('open');
    elClose.addEventListener('click', close);
    elOverlay.addEventListener('click', close);
  };
  close = () => {
    closing = true;
    $modal.classList.remove('open');
    $modal.classList.add('hide');
    setTimeout(() => {
      $modal.classList.remove('hide');
      closing = false;
    }, ANIMATION_SPEED);

    elClose.removeEventListener('click', close);
    elOverlay.removeEventListener('click', close);
  };

  objClass.addEventListener('click', open);

  return {
    destroy() {},
  };
};
