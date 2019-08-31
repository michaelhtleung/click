const FADE_OUT_SPEED = 400;
const FADE_IN_SPEED = 600;

let clickedPoints = []; // points clicked by user used to set regression parameters
let regressionPoints = []; // points that outline the linearly regressed curve

document.addEventListener("contextmenu", function(event){
	// stop the context menu from appearing
	event.preventDefault();
});

document.addEventListener("mousedown", function(event){
  const RIGHT_DOWN = 3;
	if (event.which === RIGHT_DOWN){
		// document.getElementsByClassName('dot').style.animationPlayState = "paused";
		$(".dot").fadeOut(FADE_OUT_SPEED, function(){
			$(".dot").remove();
			// remove all points
			clickedPoints = [];
			regressionPoints = [];
			$("#flex-container").fadeIn(FADE_IN_SPEED);
		});
	}
});

$(document).ready(function() {
	$("body").click(function(event) {
	  // handle each new data point
		let coords;
		let model;
		$(".regression").remove();
		regressionPoints = [];

		coords = getCoordinates(event);
		// console.log(coords);
		clickedPoints.push(coords);
		drawPoint(coords, "data");

		// handle all new regression points
		model = updateModel(model);
		regressionPoints = updateRegressionPoints(model, regressionPoints);
		drawRegressionPoints(regressionPoints);
	});
});

// gets called once to remove the title text without saving an event 
// as multiple points to the model
function hideTitle() {
	// No need to rip things out of the DOM now, because
	// fadeOut() sets display:none last.
	$("#flex-container").fadeOut(FADE_OUT_SPEED);
}

function getCoordinates(event) {
	// these coordinates are with respect to the document's origin, 
	// NOT the window's (viewport's) origin
	let x = event.clientX;
	let y = event.clientY;
	return [x, y];
}

// coords array Array holding the x and y coordinates of the point to be drawn on the DOM
// type string String specifying which type of point needs to be drawn to set the styles and animation
function drawPoint(coords, type) {
	// units in px, one day this should be passed via sass variables somehow I think
	let width = 26;
	let height = 26;

	// subtraction is for centering the dots and uses some magic numbers
	let css = `left: ${coords[0] - width*0.80};`;
	css += `top: ${coords[1] - height*0.80};`;
	css += " display: none;";
	let cssClass = `dot ${type}`;
	let html = `<div class="${cssClass}" style="${css}"></div>`;

	$("body").append(html);
	// todo: change this to ".data" once the regression animation is done
	$(".dot").fadeIn(FADE_IN_SPEED);
}

function drawRegressionPoints(rp) {
	for (let index = 0; index < rp.length; index++) {
		drawPoint(rp[index], "regression");
	}
}

function updateModel(model) {
	model = regression.linear(clickedPoints);
	return model;
}

function updateRegressionPoints(model, regressionPoints) {
	let spacing = 40;
	for (let x = spacing; x < window.innerWidth; x += spacing) {
		regressionPoints.push(model.predict(x));
	}
	return regressionPoints
}
