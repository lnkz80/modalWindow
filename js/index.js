const modal = $.modal({
  title: "Hello! This is modal window",
  closable: true,
  content:
    "<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p>",
  width: "400px",
  buttons: [
    {
      text: "Ok",
      style: "primary",
      size: "sm",
      handler() {
        modal.close();
      },
    },
    {
      text: "Cancel",
      style: "secondary",
      size: "sm",
      handler() {
        modal.close();
      },
    },
  ],
});

const cards = [
  {
    id: 0,
    imgsrc: "img/maserati.png",
    title: "Maserati",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.",
    price: 50000,
  },
  {
    id: 1,
    imgsrc: "img/mustang.png",
    title: "Ford",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.",
    price: 40000,
  },
  {
    id: 2,
    imgsrc: "img/porsche.png",
    title: "Porche",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.",
    price: 90000,
  },
];

function cardsHTML(id, img, title, text) {
  const html = `<div class="card" style="width: 18rem;" data-ttt="${id}">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
    <div class="d-flex justify-content-center" data-id="${id}">
      <button class="btn btn-sm btn-primary" data-price="true">See price</button>&nbsp;
      <button class="btn btn-sm btn-danger" data-delete="true" id="qaz">Delete</button>
    </div>
  </div>
</div>`;
  return html;
}

//massive of cards
let crd = "";
cards.forEach((card) => {
  crd += cardsHTML(card.id, card.imgsrc, card.title, card.text);
});
document
  .querySelector(".container")
  .insertAdjacentHTML("afterbegin", `<div class="card-deck">${crd}</div>`);

function searchParentNode(elem, targetClass = "card") {
  // uplvl = elem.parentElement;
  while (elem.className != targetClass) {
    elem = elem.parentElement;
  }
  return elem;
}

//eventListeners
const btnListener = (event) => {
  // console.log(event.target.dataset.close);
  const id = event.target.parentElement.dataset.id;

  if (event.target.dataset.price) {
    const cardModalPrice = $.modal({
      title: "The price of " + cards[id].title + " is:",
      closable: true,
      content: `<h4>${cards[id].price}</h4>`,
      width: "300px",
      buttons: [
        {
          text: "Buy it!",
          style: "primary",
          size: "sm",
          handler() {
            cardModalPrice.close();
          },
        },
      ],
    });
    cardModalPrice.open();
  }
  if (event.target.dataset.delete) {
    const cardModalDelete = $.modal({
      title: "Deleting of card",
      closable: true,
      content: `Do you want to DELETE a card with name "${cards[id].title}"?`,
      width: "300px",
      buttons: [
        {
          text: "Delete",
          style: "primary",
          size: "sm",
          handler() {
            const nodeToDelete = searchParentNode(event.target);
            cardModalDelete.close();
            nodeToDelete.classList.add("animate");
            nodeToDelete.onanimationend = (e) => {
              if (e.srcElement.classList.contains("animate")) {
                nodeToDelete.parentNode.removeChild(nodeToDelete);
                cardModalDelete.destroy();
              }
            };
            // nodeToDelete.remove();
          },
        },
        {
          text: "Cancel",
          style: "secondary",
          size: "sm",
          handler() {
            cardModalDelete.close();
          },
        },
      ],
    });
    cardModalDelete.open();
  }
};
$cardDeck = document.querySelector(".card-deck");
$cardDeck.addEventListener("click", btnListener);

// morebtn
document.querySelector("[data-open]").addEventListener("click", modal.open);

// let cardsHTML = ``;

// const $cards = document.createElement('div');
// $cards.classList.add('card-deck');
// cards.forEach((card) => {
//   const $crd = document.createElement('div');
//   $crd.classList.add('card');
//   $crd.style.width = '18rem';
//   //adding Card image
//   $crdImg = document.createElement('img');
//   $crdImg.src = card.imgsrc;
//   $crdImg.classList.add('card-img-top');
//   $crd.appendChild($crdImg);
//   //adding Card body
//   $crdBody = document.createElement('div');
//   $crdBody.classList.add('card-body');
//   $crd.appendChild($crdBody);
//   //adding Card Title
//   $crdTitle = document.createElement('h5');
//   $crdTitle.classList.add('card-title');
//   $titleText = document.createTextNode(card.title);
//   $crdTitle.appendChild($titleText);
//   $crdBody.appendChild($crdTitle);
//   //adding Card Text
//   $crdText = document.createElement('p');
//   $crdText.classList.add('card-text');
//   $text = document.createTextNode(card.text);
//   $crdText.appendChild($text);
//   $crdBody.appendChild($crdText);
//   //adding Card buttons container
//   $btnContainer = document.createElement('div');
//   $btnContainer.classList.add('d-flex', 'justify-content-center');
//   $crdBody.appendChild($btnContainer);
//   //adding Card Buttons
//   $crdBtn = document.createElement('a');
//   $crdBtn.href = '/';
//   $crdBtn.classList.add('btn', 'btn-primary', 'btn-sm');
//   $crdBtn.textContent = 'See price';
//   $btnContainer.appendChild($crdBtn);
//   //add WHITESPACE
//   const foo = document.createTextNode('\u00A0');
//   $btnContainer.appendChild(foo);

//   $crdBtn2 = document.createElement('a');
//   $crdBtn2.href = '/';
//   $crdBtn2.classList.add('btn', 'btn-danger', 'btn-sm');
//   $crdBtn2.textContent = 'Delete';
//   $btnContainer.appendChild($crdBtn2);

//   $crd.appendChild($crdBody);
//   $cards.appendChild($crd);
// });
// document.querySelector('.container').insertBefore($cards, document.querySelector('.container>h1'));
