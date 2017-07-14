// adds event listener to the whole window to listen for a click and then run randomNumber function
window.addEventListener("click", randomNumber)

// sets pics to equal the array of both needed images
let pics = ["images/arrow_left.png", "images/arrow_right.png"];

// defines function randomNumber
function randomNumber() {

	console.log("randomNumber is working")
	// sets variable randNum to euqual a random value between 
	let randArrow = pics[Math.floor(Math.random() * pics.length)];

	// sets the body in the html to equal the value of the random image that's been generated
	body.innerHTML = `<img id="pic" src=${randArrow}>`
};

