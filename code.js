'use strict';
// Elements
let totalMoneyElement = document.querySelector('#totalMoney');
let percentageElement = document.querySelector('#percentageLeft');
let buyButtons = document.querySelectorAll('#buy');
let sellButtons = document.querySelectorAll('#sell');
const appContainer = document.querySelector('.app-container');

// Default data
let bitFortune = 50000000000;
let totalPercentage = 100;

let elements = [];

// Events
appContainer.addEventListener('click', (e) => {
  let element = e.target.parentElement;

  if (e.target.classList.contains('btn-buy')) {
    buyItem(element);
  } else if (e.target.classList.contains('btn-sell')) {
    sellItem(element);
  }
});

// Buy item
function buyItem(element) {
  // change default data to new data

  if (bitFortune - Number(element.dataset.price) >= 0) {
    bitFortune -= Number(element.dataset.price);
    totalPercentage = (bitFortune * 100) / 50000000000;

    // Item name
    let itemName = element.parentElement.querySelector('#name').textContent;

    // get span to increment by one
    let amountOfItems = element.querySelector('#amount');
    amountOfItems.textContent = `${Number(amountOfItems.textContent) + 1}`;

    // get button to enable it when item is more than 0
    let button = element.querySelector('#sell');
    if (Number(amountOfItems.textContent) > 0) {
      button.disabled = false;
    }

    updateTotalAndPercentage();

    // Create (if its new) or update recipt item(if it already exists)
    createReciptItem(
      itemName,
      Number(amountOfItems.textContent),
      formatMoney(
        Number(element.dataset.price) * Number(amountOfItems.textContent)
      )
    );

    updateReceipt();
  } else {
    cantAffordAlert();
  }
}

function cantAffordAlert() {
  totalMoneyElement.innerHTML = `<p class="totalMoney">Can't afford that!</p>`;
  percentageElement.innerHTML = `<p class ="percentageLeft">Sell something!</p>`;
}

function createReciptItem(name, amount, total) {
  let receiptItem = new ReceiptItem();
  receiptItem.name = name;
  receiptItem.amount = amount;
  receiptItem.total = total;

  if (!checkReceiptItemExists(receiptItem)) {
    receiptItemsArr.push(receiptItem);
  } else {
    updateReceiptItem(receiptItem);
  }
}

// Sell Item
function sellItem(element) {
  // change default data to new data

  bitFortune += Number(element.dataset.price);
  totalPercentage = (bitFortune * 100) / 50000000000;

  // Item name
  let itemName = element.parentElement.querySelector('p').textContent;

  // get span to decrement by one
  let amountOfItems = element.querySelector('span');
  amountOfItems.textContent = `${Number(amountOfItems.textContent) - 1}`;

  // get button to disable when item is less than 0
  let button = element.querySelector('#sell');

  if (Number(amountOfItems.textContent) === 0) {
    button.disabled = true;
  }
  updateTotalAndPercentage();

  createReciptItem(
    itemName,
    Number(amountOfItems.textContent),
    formatMoney(
      Number(element.dataset.price) * Number(amountOfItems.textContent)
    )
  );

  updateReceipt();
}

function updateTotalAndPercentage() {
  totalMoneyElement.innerHTML = `<p class="totalMoney">Remaining: ${formatMoney(
    bitFortune
  )} GBP</p>`;
  percentageElement.innerHTML = `<p class ="percentageLeft">You only spent ${(
    100 - totalPercentage
  ).toFixed(6)} % of the total!</p>`;
}

// Format Money Function
function formatMoney(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

// Class to create unique receipt items
class ReceiptItem {
  constructor() {
    this.name;
    this.amount;
    this.total;
  }
}

let receiptItemsArr = [];

// Function that check if that receipt items its already added on the array
function checkReceiptItemExists(receiptItem) {
  let i = 0;
  let exists = false;

  while (!exists && i < receiptItemsArr.length) {
    let itemX = receiptItemsArr[i];
    if (itemX.name === receiptItem.name) {
      exists = true;
    }
    i++;
  }

  return exists;
}

function updateReceiptItem(receiptItem) {
  let i = 0;
  let itemInArr = null;

  while (itemInArr === null && i < receiptItemsArr.length) {
    let itemX = receiptItemsArr[i];

    if (itemX.name === receiptItem.name) {
      itemInArr = itemX;
    }
    i++;
  }

  if (itemInArr) {
    itemInArr.name = receiptItem.name;
    itemInArr.amount = receiptItem.amount;
    itemInArr.total = receiptItem.total;
  }
}

// Function to create recipt (iterara por el array y mostrara los objetos en una lista)
function updateReceipt() {
  let title = `<h1>Receipt</h1>`;
  let receipt = '';
  let total = formatMoney(50000000000 - bitFortune);

  for (let i = 0; i < receiptItemsArr.length; i++) {
    let itemX = receiptItemsArr[i];

    if (itemX.amount !== 0) {
      receipt += `<p>${itemX.name} x <strong> ${itemX.amount}</strong>..............$ ${itemX.total}</p>`;
    }
  }

  document.querySelector('#receipt-container').innerHTML =
    title + receipt + `<p class="totalRecipt">Total is: $ ${total}</p>`;
}

// Function to print
function printSection(el) {
  let printsection = document.getElementById(el).innerHTML;
  document.body.innerHTML = printsection;

  window.print();
}

// Element class - preload data - generate html elements

class Element {
  static nro = 1;
  constructor(name, price, image) {
    this.id = Element.nro++;
    this.name = name;
    this.price = price;
    this.amount = 0;
    this.image = image;
  }
}

function createAndSaveElement(elementName, price, image) {
  if (elementName !== '' && price > 0 && image !== '') {
    let newElement = new Element(elementName, price, image);
    elements.push(newElement);
  }
}

preLoad();

function preLoad() {
  createAndSaveElement('AirPods Pro', 249, 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000');

  createAndSaveElement(
    'Lottery Ticket',
    2,
    'https://i2-prod.derbytelegraph.co.uk/incoming/article7062510.ece/ALTERNATES/s1200b/4_National-Lottery-ticket-sales.jpg'
  );

  createAndSaveElement('Xbox Series X', 499, 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707');

  createAndSaveElement(
    'Samsung S22 Ultra - 256GB',
    1249,
    'https://cdn.shopify.com/s/files/1/0077/5513/7083/products/28640aac-4807-4ba1-b336-62e9e8b8d84a_1200x.jpg'
  );

  createAndSaveElement(
    'Gaming PC (AMD Ryzen 7 7590X, RTX 4090, 128GB, 4TB SSD)',
    7500,
    'https://m.media-amazon.com/images/I/714nEQAmf0L._AC_SL1500_.jpg'
  );

  createAndSaveElement(
    'Own a Third of Starbucks',
    45000000000,
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
  );
  createAndSaveElement(
    'Youtube Premium for 100 years',
    14300,
    'https://www.theindianwire.com/wp-content/uploads/2019/08/YouTube-Premium-receives-1080p-offline-downloads-option-but-only-on-iOS.jpg'
  );

  createAndSaveElement(
    'Start a small business',
    50000,
    'https://img.freepik.com/free-vector/red-arrow-going-up-with-bar-chart_1308-112640.jpg'
  );
  createAndSaveElement(
    'Meet a Celebrity',
    1000000,
    'https://e3.365dm.com/21/07/2048x1152/skynews-jeff-bezos-amazon_5437859.jpg'
  );
  createAndSaveElement(
    'Give £10,000 to 5000 people',
    50000000,
    'https://imageio.forbes.com/blogs-images/ofx/files/2018/09/OFX3-iStock-492595743-1200x800.jpg?format=jpg'
  );

  createAndSaveElement(
    'Tesla Model s',
    105000,
    'https://ev-database.uk/img/auto/Tesla_Model_S_2021/Tesla_Model_S_2021-02.jpg'
  );

  createAndSaveElement(
    '1 Million cans of pringles',
    2000000,
    'https://images.ctfassets.net/6jpeaipefazr/5OuqEIBsF430ylfQ3g8jqt/e2b01d3fce0c107b88b2de5b4d2486ab/P13-5053990138722.jpg'
  );

  createAndSaveElement(
    'Lamborghini Aventador SVJ',
    290000,
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/svj/2021/03_19/aventador_svj_overview_m.jpg'
  );

  createAndSaveElement(
    '1000 Acres of land',
    5000000,
    'https://wallup.net/wp-content/uploads/2019/10/156991-summer-field-landscape.jpg'
  );
  createAndSaveElement(
    'Private Island',
    5950000,
    'https://images.wsj.net/im-443421?width=1280&size=1'
  );
  createAndSaveElement(
    'Drop your bank card in public',
    50000000000,
    'https://media.istockphoto.com/id/1262310518/vector/realistic-detailed-3d-black-plastic-credit-card-template-vector.jpg?s=612x612&w=0&k=20&c=tNXOkjqWnMctDPLWSKhqS8MuUMT_OR881od0xblUakw='
  );

  createAndSaveElement(
    'Apache Helicopter',
    1000000,
    'https://thediplomat.com/wp-content/uploads/2017/05/sizes/td-story-s-2/thediplomat.com-boeing_fuji_ah-64djp_apache_longbow_japan_-_army_an2227712.jpg'
  );

  createAndSaveElement(
    'F1 Team',
    700000000,
    'https://www.formula1.com/content/dam/fom-website/sutton/2020/Belgium/Sunday/1269688830.jpg.transform/9col/image.jpg'
  );

  createAndSaveElement(
    'Private Jet',
    450000000,
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJYhAZI6frQHaElEy02d5hxjuIgAmXyTp5A&usqp=CAU'
  );

  createAndSaveElement(
    'Publish a Bestseller',
    1500,
    'https://i.guim.co.uk/img/media/423d3ddf306e98864c1d887c1dcf290421cd21a7/0_169_4912_6140/master/4912.jpg?width=700&quality=85&auto=format&fit=max&s=864393ed1c322fc5ddcb2766c3c945e6'
  );

  createAndSaveElement(
    'Apartment',
    320000,
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/266970766.jpg?k=a58d68c20c0189f3e89ca8a02898a11c0a617ef568eb69ba5eb3a61bafb6d86a&o=&hp=1'
  );

  createAndSaveElement(
    'Mansion',
    44000000,
    'https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1645135325/architecturaldigest_on-the-market-inside-a-23-dollars-million-mega-mansion-surrounded-by-a-lake.jpg'
  );

  createAndSaveElement(
    'Skyscraper',
    850000000,
    'https://uploads.prod01.london.platform-os.com/instances/831/assets/images/skyscraper%20WEB.png'
  );

  createAndSaveElement(
    'Mega Yatch',
    300000000,
    'https://media.cntraveler.com/photos/633465b708c8c4ac97ede225/16:9/w_2560%2Cc_limit/four%2520seasons%2520yacht-sept22-pr4.jpg'
  );
}

elements.forEach((element) => {
  let newElement = document.createElement('div');

  newElement.classList.add('element');

  newElement.innerHTML = `<img src="${element.image}" alt="${element.name}" />
  <p id="name">${element.name}</p>
  <span id="price">GBP ${formatMoney(element.price)}</span>
  <div class="buyAndSellContainer" data-price="${element.price}">
    <button class="btn-sell" id="sell" disabled>Sell</button>
    <span id="amount">${element.amount}</span>
    <button class="btn-buy" id="buy" >Buy</button>
  </div>`;

  appContainer.appendChild(newElement);
});