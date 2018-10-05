'use strict';

const logable = fn => (...args) => {
  const res = fn(...args);
  console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`);
  return res;
};

// Usage

const inc = a => ++a;
const sum = (a, b) => (a + b);

const wrappedInc = logable(inc);
const wrappedSum = logable(sum);

console.log(wrappedInc(10));
console.log(wrappedSum(3, 5));
