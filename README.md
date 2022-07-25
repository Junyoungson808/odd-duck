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

function renderImgs(){
    // just get 2 imgs on the pages
    imgOne.src = allGoats[0].photo
    imgTwo.src = allGoats[1].photo
}

renderImgs();

### Event Handlers

### Event Listeners