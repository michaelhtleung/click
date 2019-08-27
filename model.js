let clickedPoints = []; // points clicked by user used to set regression parameters
let model;

function updateModel(model) {
	model = regression.linear(clickedPoints);
	console.log(model);
	return model;
}

function updateRegressionPoints(model, regressionPoints) {
	for (var x = 26; x < 1920; x += 26) {
		regressionPoints.push([x, model.predict(x)]) // this is probably not the most efficient way to do this
	}
	// console.log(regressionPoints);
	return regressionPoints
}