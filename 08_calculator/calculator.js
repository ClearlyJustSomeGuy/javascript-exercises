const add = function(aAdd, bAdd) {
	return aAdd + bAdd;
};

const subtract = function(aSub, bSub) {
 return aSub - bSub;	
};

const sum = function(sumArray) {
  let sum = 0;
  for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
  }
  return sum;
	
};

const multiply = function(multArray) {
  let product = 1;
  for (let i = 0; i < multArray.length; i++) {
    product *= multArray[i];
  }
  return product;
};

const power = function(aPow, bPow) {
	return aPow ** bPow;
};

const factorial = function(fact) {
  if (fact === 0) return 1;
  let product = 1;
  for (let i = fact; i > 0; i--) {
    product *= i;
    console.log(product);
  }
  return product;
	
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
