function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-header">
          <span class="modal-title">${options.title}</span>
          <span class="modal-close">&times;</span>
        </div>
        <div class="modal-body">
        ${options.content}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm">Ok</button>
          <button type="button" class="btn btn-secondary btn-sm">Cancel</button>
        </div>
      </div>
    </div>`
  );

  document.body.appendChild(modal);
  document.getElementsByClassName("modal-window")[0].style.width =
    options.width;

  return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;

  const modalBtns = $modal.querySelectorAll("button");
  for (let btnItem of modalBtns) {
    console.log(btnItem.type);
  }

  return {
    test() {
      console.log($modal);
    },
    open() {
      !closing && $modal.classList.add("open");
    },
    close() {
      closing = true;
      $modal.classList.remove("open");
      $modal.classList.add("hide");
      setTimeout(() => {
        $modal.classList.remove("hide");
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {
      delete $modal;
    },
  };
};
