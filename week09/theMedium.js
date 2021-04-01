console.log("the message!");

// global varialbe are usefull 
// pass the html elements into their own variable
let theBody = document.querySelector('body');
let theButton2 = document.querySelector('potato');
let theButton = document.getElementById('potato');
let theTxt = document.querySelector('h1');
// add an event listener to an element
// and trigger a function when the user does the thing 
theButton.addEventListener('click', myGreatFunction);

function myGreatFunction() {
    console.log("clicked!!");
    theBody.style.backgroundColor = "green";
    theTxt.style.textUnderlinePosition;

 
}

//ES6 arrow notation - a new and faster functiuon syntax
document.addEventListener('keydown', theEvent => {
    console.log("You pressed a key!");
})