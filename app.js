// import regression from './node_modules/regression/src/regression.js';
const regression = require('./node_modules/regression');

let clickedPoints = []; // points clicked by user used to set regression parameters
let model; // 

clickedPoints = [ [0,0], [1,1], [2,2] ];
model = regression.linear(clickedPoints);