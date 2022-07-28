"use strict";

//--------------------GLOBAL VARIABLES/IMPORTS
let totalVotes = 25;
let allProducts = [];

//--------------------DOM REFERENCES
let imgContainer = document.getElementById("img-container");
let imgOne = document.getElementById("img-one");
let imgTwo = document.getElementById("img-two");
let imgThree = document.getElementById("img-three");

let resultBtn = document.getElementById("show-result-btn");
let resultList = document.getElementById("result-list");

console.log(imgOne);
//--------------------CONSTRUCTOR FUNCTIONS

function Products(name, photoExtension = "jpg") {
  this.name = name;
  this.photo = `img/${name}.${photoExtension}`;
  this.views = 0;
  this.votes = 0;

  allProducts.push(this);
}

//--------------------OBJECT CREATION
// if() {

// } else {
new Products("sweep", "png");
new Products("bag");
new Products("banana");
new Products("bathroom");
new Products("boots");
new Products("breakfast");
new Products("bubblegum");
new Products("chair");
new Products("cthulhu");
new Products("dog-duck");
new Products("dragon");
new Products("pen");
new Products("pet-sweep");
new Products("scissors");
new Products("shark");
new Products("tauntaun");
new Products("unicorn");
new Products("water-can");
new Products("wine-glass");

// }

//--------------------HELPER FUNCTIONS

function randomNum() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderImg() {
  let imgOneIndex = randomNum();
  let imgTwoIndex = randomNum();
  let imgThreeIndex = randomNum();

  while (
    imgOneIndex === imgTwoIndex ||
    imgTwoIndex === imgThreeIndex ||
    imgOneIndex === imgThreeIndex
  ) {
    imgTwoIndex = randomNum();
    imgThreeIndex = randomNum();
  }

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
    imgContainer.removeEventListener("click", handleClick);
  }
}

function handleShowResults() {
  if (totalVotes === 0) {
    for (let i = 0; i < allProducts.length; i++) {
      let liElem = document.createElement("li");
      liElem.textContent = `${allProducts[i].name}; views: ${allProducts[i].views} votes: ${allProducts[i].votes}`;
      resultList.appendChild(liElem);
    }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

//--------------------EVENT LISTENERS
imgContainer.addEventListener("click", handleClick);
resultBtn.addEventListener("click", handleShowResults);

const ctx = document.getElementById("myChart");

let myObj = {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Views",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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

new Chart(ctx, myObj);
