// creates the variable body to hold the element body from the html
let output = document.getElementById("arrows");
let pics = ["images/arrow_left.png", "images/arrow_right.png"];

// defines function randomNumber
function randomNumber(){

	// sets variable randNum to euqual a random value between 0 and 10
	var randNum = Mathfloor((Math.random()));

	// condition checking to see if the random number is less than or equal to 5
	if (randNum <= 5) {

		// puts the arrow_left image into the DOM
		output.innerHTML = `<img id="arrows" src=${arrow_left.png}>`;
	
	// otherwise if false
	}else {

		// puts the arrow_right image into the DOM
		output.innerHTML = `<img id="arrows" src=${arrow_right.png}>`;
};

output.addEventListener("click", randomNumber)












