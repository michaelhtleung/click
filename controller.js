$(document).ready(function() {
	$("body").click(function(event) {
	  // handle each new data point
		let coords;
		let model;
		coords = getCoordinates(event);
		clickedPoints.push(coords);
		drawPoint(coords, "data");

		// handle all new regression points
		model = updateModel(model);
		$(".regression").remove();
		drawRegressionPoints(model);
	});
});

// gets called once to remove the title text without saving an event 
// as multiple points to the model
function hideTitle() {
	// No need to rip things out of the DOM now, because
	// fadeOut() sets display:none last.
	$("#flex-container").fadeOut("slow"); 
}

function getCoordinates(event) {
	// these coordinates are with respect to the document's origin, 
	// NOT the window's (viewport's) origin
	var x = event.clientX;
	var y = event.clientY; 
	var coords = [x, y];
	return coords;

	// next steps:
	// 1. append coords to dataPoints array
	// 2. call calculateRegression() to calculate the new regression coefficients
	// 3. call renderRegression() to update the DOM to reflect the new regression
	// these 3 above steps can done in a getMouseWheel() function parallel to
	// getCoordinates(), where scrolling the mouse wheel causes the order of the
	// regression polynomial to change, but we should prompt the user to scroll
	// their wheel or they're unlikely to find this feature
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
	let cssClass = `dot ${type}`;
	let html = `<div class="${cssClass}" style="${css}"></div>`;

	if (cssClass = "regression") {
		html = "<div class=regressionDotFlexContainer>" + html;
		html += "</div>";
	}

	$("body").append(html);
}

function drawRegressionPoints(model) {
	// I didn't use forEach() because type isn't an index
	for (let index = 0; index < model.points.length; index++) {
		drawPoint(model.points[index], "regression");
	}
}