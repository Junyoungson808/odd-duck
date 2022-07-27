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

console.log(imgOne)

function Products(name, photoExtension = 'jpg') {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

//--------------------OBJECTS
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
new Products('sweep', 'png');
new Products('tauntaun');
new Products('unicorn');
new Products('water-can');
new Products('wine-glass');

//--------------------CONSTRUCTOR METHODS
//--------------------HELPER FUNCTIONS

function randomIndexGenerator() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderImg() {
  let imgOneIndex = randomIndexGenerator();
  let imgTwoIndex = randomIndexGenerator();
  let imgThreeIndex = randomIndexGenerator();

  while(imgOneIndex === imgTwoIndex || imgTwoIndex === imgThreeIndex || imgOneIndex === imgThreeIndex) {
    imgTwoIndex = randomIndexGenerator();
    imgThreeIndex = randomIndexGenerator();

  }
  imgOne.src = allProducts[imgOneIndex].photo;
  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgThree.src = allProducts[imgThreeIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].photo;
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


// let myObj = {
//   const ctx = document.getElementById('myChart').getContext('2d');
//   const myChart = new Chart(ctx, 
//       {type}: 'bar',
//       data: {
//           labels}: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label}: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//   options: {
//       scales}: {
//           y: {
//               beginAtZero}: true
//           }
//       }
//   }
// });