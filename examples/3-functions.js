'use strict';

console.log(sum1(50, 50));

// Function declaration
function sum1(a, b) {
  return a + b;
}

// Function expresion
const sum2 = function(a, b) {
  return a + b;
};

// Arrow function
const sum3 = (a, b) => {
  const sum = a + b;
  return sum;
};

const sum4 = (a, b) => a + b;

console.log(sum1(10, 10));
console.log(sum2(20, 20));
console.log(sum3(30, 30));
console.log(sum4(40, 40));
