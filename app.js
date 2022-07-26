'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
let totalVotes = 25;
let allProducts = [];
//--------------------CONSTRUCTORS
function Products(name, photoExtension = "jpg") {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

new Products("bag");
new Products("banana");
new Products("bathroom");
new Products("boots");
new Products("bubblegum");
new Products("chair");
new Products("cthulhu");
new Products("dog-duck");
new Products("dragon");
new Products("pen");
new Products("pet-sweep");
new Products("scissors");
new Products("shark");
new Products("sweep", "png");
new Products("tauntaun");
new Products("unicorn");
new Products("water-can");
new Products("wine-glass");

//--------------------CONSTRUCTOR METHODS
let imgContainer = document.getElementById("img-container");
let imgOne = document.getElementById("img-one");
let imgTwo = document.getElementById("img-two");
let imgThree = document.getElementById("img-three");

let resultBtn = document.getElementById("show-result-btn");
let resultList = document.getElementById("result-list");
//--------------------FUNCTIONS

function randomIndexGenerator() {
  return Math.floor(Math.random() * allProducts.length);
  // min - 0
  // max - array.length - 1
}

function renderImg() {
  imgOne.src = allProducts[0].photo;
  imgTwo.src = allProducts[0].photo;
  imgThree.src = allProducts[0].photo;
}

renderImg();

//--------------------EVENT LISTENERS

//--------------------EVENT HANDLERS

//--------------------FUNCTION CALLS

// What do we need?

// Dom References

// Constructor - What is our Constructor? Objects to build

// Global Variables

// Executable Code
