// this file holds all the regression tests
const regression = require('regression');

let data = [];

data = [ [0,0], [1,1], [2,2] ];
model = regression.linear(data);
console.log(model);
console.log(model.predict(5));
console.log(model.predict(2.4));