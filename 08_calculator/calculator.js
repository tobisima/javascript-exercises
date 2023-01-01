const add = function(a, b) {
  return a + b;	
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let arr = [];
  for ( let i = 1; i <= num; i++ ) {
    arr.push(i);
  }
  return arr.reduce((total, num) => total * num, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
