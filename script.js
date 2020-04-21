
// ES5 and ES6 142


//arrow functions

const add = (a,b) => a + b;  //need to have single return to do this way



//advance arrays  146

var array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num *2);
})

console.log(double);

// map, filter, reduce

const mapArray = array.map((num) => {
	return num * 2;
})

//rewrite above taking full advantage of arrow function
const mapArray = array.map(num => num * 2);

const filterArray = array.filter(num => {
	return num > 5;
})
// rewrite taking full advantage of arrow function

const filterArray = array.filter(num => num > 5);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 2);


