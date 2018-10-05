'use strict';

// Func, not value

function add(x) {
  return function(y) {
    const sum = x + y;
    console.log(x + ' + ' + y + ' = ' + sum);
    return add(sum);
  };
}

// const add = x => y => {
//   const sum = x + y;
//   return add(sum);
// };

// const add = x => y => add(x + y);

// Usage

const a1 = add(5);
console.log(a1);

const a2 = a1(2);
const a3 = a2(3);

const a4 = a1(1);
const a5 = a2(10);
console.log(a1, a2, a3, a4, a5);

const res = add(1)(4)(8)(8);
console.log(res);
