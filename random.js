// creates the variable body to hold the element body from the html
let output = document.getElementById("arrows");

// defines function randomNumber
function randomNumber(){

	// sets variable randNum to euqual a random value between 0 and 10
	var randNum = Mathfloor ( ( Math.random() * 10) + 1);

	// condition checking to see if the random number is less than or equal to 5
	if (randNum <= 5) {

		// puts the arrow_left image into the DOM
		output.innerHTML = `<div><img src="../arrow_left.png"></div`;
	
	// otherwise if false
	}else {

		// puts the arrow_right image into the DOM
		output.innerHTML = `<div><img src="../arrow_right.png"></div`;
	}
};

output.addEventListener("click", randomNumber)












