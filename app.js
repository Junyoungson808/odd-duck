'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
let totalVotes = 25;
let allProducts = [];
//--------------------CONSTRUCTORS
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('show-result-btn');
let resultList = document.getElementById('result-list');
//--------------------OBJECTS
function Products(name, photo = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photo}`;
  this.views = 0;
  this.votes = 0;
  
  allProducts.push(this);
}

//--------------------CONSTRUCTOR METHODS

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
//--------------------HELPER FUNCTIONS
function randomIndexGenerator() {
  return Math.floor(Math.random() * allProducts.length);
}

// let productIndexArr = [];

function renderImg() {

  // while(productIndexArr.length < 3){
  //   let randomNum = randomIndexGenerator();
  //   if(!productIndexArr.includes(randomNum)){
  //     productIndexArr.push(randomNum);
  //   }
  // }

  let imgOneIndex = randomIndexGenerator();
  let imgTwoIndex = randomIndexGenerator();
  let imgThreeIndex = randomIndexGenerator();

  while(imgOneIndex === imgTwoIndex || imgTwoIndex === imgThreeIndex || imgThreeIndex === imgOneIndex) {
    imgTwoIndex = randomIndexGenerator();
    imgThreeIndex = randomIndexGenerator();

  }

  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;

  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  allProducts[imgOneIndex].views++;

  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].name;
  allProducts[imgOneIndex].views++;
}

renderImg();

//--------------------EVENT LISTENERS
function handleClick(event) {
  let imgClicked = event.target.alt;

  for (let i = 0; i < allProducts.length; i++){
    if(imgClicked === allProducts[i].name){
      allProducts[i].votes++; 
    }
  }
  totalVotes--;
  if(totalVotes === 0){
    imgContainer.removeEventListener('click',handleClick);
  }
  renderImg();
}



//--------------------EVENT HANDLERS

function handleShowResults(){
  if(totalVotes === 0){
    for(let i = 0; i < allProducts[i].length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${allProducts[i].name}: views: ${allProducts[i].views}, views: ${allProducts[i].votes}`;
      resultList.appendChild(liElem);
    }
  }
}


//--------------------FUNCTION CALLS

// What do we need?

// Dom References

// Constructor - What is our Constructor? Objects to build

// Global Variables

// Executable Code
