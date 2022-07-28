'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
let totalVotes = 25;
let allProducts = [];

//--------------------DOM REFERENCES
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultBtn = document.getElementById('show-result-btn');
// let resultList = document.getElementById('result-list');


//--------------------LOCAL STORAGE START  -- STEP 3 -- GET DATA OUT OF LOCAL STORAGE

let retreivedProducts = localStorage.getItem('myProducts');

console.log('retrievedAllProducts', retreivedProducts);

let parsedProducts = JSON.parse(retreivedProducts);

console.log('parsed products', parsedProducts);


//--------------------CONSTRUCTOR FUNCTIONS

function Products(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

// for( let i = 0; i < productsNames.length: i++){
//   if(productsNames[i] === 'sweep'){
//     new Products(productsNames[i],'png');
//   } else {
//     new Products(productsNames[i]);
//   }
// }

//--------------------OBJECT CREATION
if(retreivedProducts) {
  allProducts = parsedProducts;
} else {
  new Products('sweep', 'png');
  new Products('bag');
  new Products('banana');
  new Products('bathroom');
  new Products('boots');
  new Products('breakfast');
  new Products('bubblegum');
  new Products('chair');
  new Products('cthulhu');
  new Products('dog-duck');
  new Products('dragon');
  new Products('pen');
  new Products('pet-sweep');
  new Products('scissors');
  new Products('shark');
  new Products('tauntaun');
  new Products('unicorn');
  new Products('water-can');
  new Products('wine-glass');
}

//--------------------HELPER FUNCTIONS

function randomNum() {
  return Math.floor(Math.random() * allProducts.length);
}

let productIndexArr = [];

function renderImg() {

  while(productIndexArr.length < 6){
    let randomNumber = randomNum();
    if(!productIndexArr.includes(randomNumber)){
      productIndexArr.push(randomNumber);
    }
  }

  let imgOneIndex = productIndexArr.shift();
  let imgTwoIndex = productIndexArr.shift();
  let imgThreeIndex = productIndexArr.shift();

  // while (
  //   imgOneIndex === imgTwoIndex ||
  //   imgTwoIndex === imgThreeIndex ||
  //   imgOneIndex === imgThreeIndex
  // ) {
  //   imgTwoIndex = randomNum();
  //   imgThreeIndex = randomNum();
  // }

  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  imgOne.name = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;

  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  imgTwo.name = allProducts[imgTwoIndex].name;
  allProducts[imgTwoIndex].views++;

  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].name;
  imgThree.name = allProducts[imgThreeIndex].name;
  allProducts[imgThreeIndex].views++;
}

renderImg();

//--------------------EVENT HANDLERS
function handleClick(event) {
  let imgClicked = event.target.name;
  console.log(imgClicked);

  for (let i = 0; i < allProducts.length; i++) {
    if (imgClicked === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  totalVotes--;

  renderImg();

  if (totalVotes === 0) {
  


    //--------------------LOCAL STORAGE START  -- STEP 1
    let stringifiedProducts = JSON.stringify(allProducts);
    
    console.log('stringified products', stringifiedProducts);
    
    //--------------------LOCAL STORAGE START  -- STEP 2
    localStorage.setItem('myProducts', stringifiedProducts);
    




    imgContainer.removeEventListener('click', handleClick);
  }
}








function handleShowResults() {
  if (totalVotes === 0) {
    renderChart();
    // for (let i = 0; i < allProducts.length; i++) {
    //   let liElem = document.createElement("li");
    //   liElem.textContent = `${allProducts[i].name}; views: ${allProducts[i].views} votes: ${allProducts[i].votes}`;
    //   resultList.appendChild(liElem);
    // }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

//--------------------CHART DEMO
let canvasElem = document.getElementById('myChart');

function renderChart() {

  let productsNames = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < allProducts.length; i++) {
    productsNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    productVotes.push(allProducts[i].votes);
  }

  let myObj = {
    type: 'bar',
    data: {
      labels: productsNames,
      datasets: [
        {
          label: '# of Votes',
          data: productVotes,
          backgroundColor: ['red'],
          borderColor: ['red'],
          borderWidth: 1,
        },
        {
          label: '# of Views',
          data: productViews,
          backgroundColor: ['blue'],
          borderColor: ['blue'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  new Chart(canvasElem, myObj);
}

//--------------------EVENT LISTENERS
imgContainer.addEventListener('click', handleClick);
resultBtn.addEventListener('click', handleShowResults);
