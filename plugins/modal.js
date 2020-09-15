function _createModal(options) {
  const DEFAULT_WIDTH = "600px";
  const modal = document.createElement("div");
  modal.classList.add("vmodal");

  modal.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width: ${
        options.width || DEFAULT_WIDTH
      }">
        <div class="modal-header">
          <span class="modal-title">${options.title || "Window"}</span>
          ${
            options.closable
              ? `<span class="modal-close" data-close="true">&times;</span>`
              : ""
          }
        </div>
        <div class="modal-body" data-content>
        ${options.content || ""}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-sm confirm">Ok</button>
          <button type="button" class="btn btn-secondary btn-sm reject">Cancel</button>
        </div>
      </div>
    </div>`
  );
  document.body.appendChild(modal);
  return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;
  let destroyed = false;

  const modal = {
    open() {
      if (destroyed) {
        return;
      }
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
  };

  // morebtn
  // const morebtn = document.querySelector("button.moreinfo");
  // morebtn.addEventListener("click", modal.open);

  // modalbtns

  const listener = (event) => {
    // console.log(event.target.dataset.close);
    if (event.target.dataset.close) {
      modal.close();
    }
  };
  $modal.addEventListener("click", listener);

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal);
      $modal.removeEventListener("click", listener);
      destroyed = true;
    },
    setContent(html) {
      $modal.querySelector("[data-content]").innerHTML = html;
    },
  });
};
