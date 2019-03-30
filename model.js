let clickedPoints = []; // points clicked by user used to set regression parameters
let regressionPoints = [] // points that outline the linearly regressed curve
let oldRegressionPoints = [] // regression points before most recent click, allows for css animation
let model; 

function appendPoint(coords) {
	clickedPoints.push(coords);
	// console.log(clickedPoints);
	updateModel();
	drawPoint(coords, "regression");
}

function updateModel() {
	oldRegressionPoints = regressionPoints;
	model = regression.linear(clickedPoints);
	// console.log(model);
	// updateRegressionPoints();
	drawRegressionPoints(model);
}

// function updateRegressionPoints() {
// 	for (var x = 26; x < 1920; x += 26) {
// 		regressionPoints.push([x, Predict(x)]) // this is probably not the most efficient way to do this
// 	}
// 	drawRegressionPoints();
// }