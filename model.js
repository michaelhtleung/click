function updateModel(model) {
	model = regression.linear(clickedPoints);
	// console.log(model);
	return model;
}

function updateRegressionPoints(model, regressionPoints) {
	oldRegressionPoints = regressionPoints; // save old points for animation
	regressionPoints = []; // clear current points
	let spacing = 40;
	for (let x = spacing; x < window.innerWidth; x += spacing) {
		regressionPoints.push(model.predict(x));
    // console.log( model.predict(x) );
	}
	// console.log(regressionPoints);
	return regressionPoints
}