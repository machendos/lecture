'use strict';

const sum = (...args) => {
  console.log(args);
  let sum = 0;
  args.forEach(number => {
    sum += number;
  });
  return sum;
};

// const sum2 = (...args) => args.reduce((pr, cur) => pr + cur);

console.log(sum(1, 2, 3));
// console.log(sum2('A', 'B', 'C', 'D'));
