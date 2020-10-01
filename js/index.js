const cards = [
  {
    id: 0,
    imgsrc: 'img/maserati.png',
    title: 'Maserati',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.',
    price: 50000,
  },
  {
    id: 1,
    imgsrc: 'img/mustang.png',
    title: 'Ford',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.',
    price: 40000,
  },
  {
    id: 2,
    imgsrc: 'img/porsche.png',
    title: 'Porche',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur     quas, velit molestias quasi deserunt iste.',
    price: 90000,
  },
];

toHTML = (card) => `
<div class="col">
    <div class="card">
        <img class="card-img-top" src="${card.imgsrc}" alt="${card.title}">
        <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.text}</p>
            <div class="d-flex justify-content-center">
                <a href="#" class="btn btn-sm btn-primary" data-btn="price" data-id="${card.id}">See price</a>&nbsp;
                <a href="#" class="btn btn-sm btn-danger" data-btn="delete">Delete</a>
            </div>
        </div>
    </div>
</div>
`;

function render() {
  // 1st var:
  //   const html = cards.map(card=>toHTML(card))
  //2nd variant:
  //   const html = cards.map(toHTML).join("");
  // html out
  //   document.querySelector("#cards").innerHTML = html;
  //==================================================
  //ALL IN ONE STRING
  document.querySelector('#cards').innerHTML = cards.map(toHTML).join('');
}

render();

const priceModal = $.modal({
  title: 'The price is',
  closable: true,
  width: '300px',
  buttons: [
    {
      text: 'Close',
      style: 'primary',
      size: 'sm',
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener('click', (event) => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id; //плюс перед значением переводит его в числовое значение

  if (btnType === 'price') {
    const card = cards.find((item) => item.id === id);
    priceModal.setContent(`
    <p>Price for ${card.title} is $<strong>${card.price}</strong></p>
    `);
    priceModal.open();
    // console.log(card);
  }
});
