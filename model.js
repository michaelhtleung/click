let clickedPoints = []; // points clicked by user used to set regression parameters
let model; 

function appendPoint(coords) {
	clickedPoints.push(coords);
	// console.log(clickedPoints);
	updateModel();
}

function updateModel() {
	model = regression.linear(clickedPoints);
	// console.log(model);
}