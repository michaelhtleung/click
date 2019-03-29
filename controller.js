$(document).ready(function() {
	// wild card character selects all elements on the page
	// which means the fadeOut() starts for any clicked element
	// on the page
	$("*").click(function() { 
		// no need to rip things out of the DOM now, because
		// fadeOut() sets display:none last
		$("#introText").fadeOut("slow"); 
	});
});



function getCoordinates(event) {
	var x = event.clientX;
	var y = event.clientY; 
	var coords = [x, y];

	appendPoint(coords);
	drawPoint(coords, "clicked");
	// alert(coords);
	// console.log(coords);
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
	// read this to see how you can pick the coordinates at which you can render
	// html elements in the DOM
	// https://javascript.info/coordinates
	if ("clicked") {
		
	}
}