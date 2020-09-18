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
    imgsrc: "img/maserati.png",
    title: "Maserati",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.",
    price: 50000,
  },
  {
    imgsrc: "img/mustang.png",
    title: "Ford",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.",
    price: 40000,
  },
  {
    imgsrc: "img/porsche.png",
    title: "Porche",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.",
    price: 90000,
  },
];

let cardsHTML = ``;

const $cards = document.createElement("div");
$cards.classList.add("card-deck");
cards.forEach((card) => {
  const $crd = document.createElement("div");
  $crd.classList.add("card");
  $crd.style.width = "18rem";
  //adding Card image
  $crdImg = document.createElement("img");
  $crdImg.src = card.imgsrc;
  $crdImg.classList.add("card-img-top");
  $crd.appendChild($crdImg);
  //adding Card body
  $crdBody = document.createElement("div");
  $crdBody.classList.add("card-body");
  $crd.appendChild($crdBody);
  //adding Card Title
  $crdTitle = document.createElement("h5");
  $crdTitle.classList.add("card-title");
  $titleText = document.createTextNode(card.title);
  $crdTitle.appendChild($titleText);
  $crdBody.appendChild($crdTitle);
  //adding Card Text
  $crdText = document.createElement("p");
  $crdText.classList.add("card-text");
  $text = document.createTextNode(card.text);
  $crdText.appendChild($text);
  $crdBody.appendChild($crdText);
  //adding Card Buttons

  $crd.appendChild($crdBody);
  $cards.appendChild($crd);
});

document
  .querySelector(".container")
  .insertBefore($cards, document.querySelector(".container>h1"));
// document
//   .querySelector(".container")
//   .insertAdjacentHTML(
//     "afterbegin",
//     `<div class="card-deck">${cardsHTML}</div>`
//   );
