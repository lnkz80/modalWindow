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
  html = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${text}</p>
    <div class="d-flex justify-content-center">
    <button class="btn btn-sm btn-primary" data-price="true" data-id="${id}">See price</button>&nbsp;
    <button class="btn btn-sm btn-danger" data-delete>Delete</button>
    </div>
  </div>
</div>`;
  return html;
}

let crd = "";

cards.forEach((card) => {
  crd += cardsHTML(card.id, card.imgsrc, card.title, card.text);
});
document
  .querySelector(".container")
  .insertAdjacentHTML("afterbegin", `<div class="card-deck">${crd}</div>`);

//eventListeners
const btnListener = (event) => {
  // console.log(event.target.dataset.close);
  if (event.target.dataset.price) {
    //call to modalWindow plugin
    const id = event.target.dataset.id;
    const cardModal = $.modal({
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
            cardModal.close();
          },
        },
      ],
    });
    cardModal.open();
    // console.log(event.target.dataset.id);
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
