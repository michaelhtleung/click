let clickedPoints = []; // points clicked by user used to set regression parameters
let model;

function updateModel(model) {
	model = regression.linear(clickedPoints);
	// console.log(model);
	return model;
}

function updateRegressionPoints(model, regressionPoints) {
	let spacing = 40;
	for (let x = spacing; x < 1920; x += spacing) {
		regressionPoints.push(model.predict(x));
    // console.log( model.predict(x) );
    // regressionPoints.push([x, 200]);
		// regressionPoints.push([x, 2*x]);
	}
	// console.log(regressionPoints);
	return regressionPoints
}