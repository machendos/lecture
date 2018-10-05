'use strict';

// cl, nt cl

const array = [1, 3, 5, 7];

const validator = element => element > 4;

let result = array.filter(validator);

console.log({ array });
console.log({ result });

function filter(arr, func) {
  const length = arr.length;
  for (let index = 0, iteration = 0; iteration < length; iteration++) {
    const element = arr[index];
    if (func(element)) index++;
    else arr.splice(index, 1);
  }
  return arr;
}

result = filter(array, validator);

console.log({ array });
console.log({ result });

// ../rest.js
