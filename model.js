// const regression = require('./node_modules/regression');
// import regression from './node_modules/regression';
let clickedPoints = []; // points clicked by user used to set regression parameters
let model; 

// module.exports = clickedPoints;
// module.exports = model;

// fast and loose testing:
clickedPoints = [ [0,0], [1,1], [2,2] ];
model = regression.linear(clickedPoints);
console.log(model);
console.log(model.predict(5));
console.log(model.predict(2.4));