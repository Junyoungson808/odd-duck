# odd-duck
lab 11 project

### Dom Reference

### Constructor Function
function Goat (name, photoExtension = 'jpg'){
    this.name = name;
    this.photo = `img/${name}.${photoExtension}`;
    this.views = 0;
    this.votes = 0;

    allGoats.push(this);
}


### Object Creation
new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('kissing-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

### Helper Functions

function randomIndexGenerator(){
    return Math.floor(Math.random() * allGoats.length);
}

function renderImgs(){
    let imgOneIndex = randomIndexGenerator();
    let imgTwoIndex = randomIndexGenerator();

    // just get 2 imgs on the pages
    // make sure they are unique each round (While Loop)

    while(imgOneIndex === imgTwoIndex){
        imgTwoIndex = randomIndexGenerator();
    }

    imgOne.src = allGoats[imgOneIndex].photo;
    imgOne.alt = allGoats[imgOneIndex].name;
    allGoats[imgOneIndex].views++
    imgTwo.src = allGoats[imgTwoIndex].photo;
    imgTwo.alt = allGoats[imgTwoIndex].name;
    allGoats[imgTwoIndex].views++
}

renderImgs();

### Event Handlers


function handleClick(event){
    // -- click -- on the imgs - rerender new images(increase the views
    on the goats that are rendered) - count the vote of the goat that was cli9cked/ lower our total number of votes
    
    let imgClicked = event.target.alt;

    for(let i = 0; i < allGoats.length: i++){

    }

    console.log(imgClicked);
}

### Event Listeners
imgContainer.addEventListener('click',handleClick);



