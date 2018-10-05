'use strict';

// object context
const sum = function() {
  return this.a + this.b;
};

// Error! Hide the following lines of code to go further
console.log(sum());
console.log(sum(1, 2));

const object = { a: 1, b: 2 };
console.log(sum.call(object));

// object context + args
const sum2 = function(c, d) {
  return this.a + this.b + c + d;
};
console.log(sum2.call(object, 3, 4));

// object context + ...args
const array = [3, 4, 5, 6];
console.log(sum2.apply(object, array));

console.log(sum2.call(object, ...array));

// bind object context
const binded = sum2.bind(object);
console.log(binded(3, 4));

// bind method on object:
const obj = {
  data: 5,
  log() {
    console.log(this.data);
  }
};

const otherObj = {
  data: 100,
};

obj.log.call(otherObj);
