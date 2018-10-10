'use strict';

const powName = 'po';

const object = {
  data: 10,

  fn1: function incSum(a) {
    return a + object.data;
  },
  sum(a, b) {
    return a + b;
  },
  inc(a) {
    return ++a;
  },
  max: (a, b) => (a > b ? a : b),
  min: (a, b) => (a < b ? a : b),
  dec: a => --a,

  [powName + 'w'](a, b) {
    return Math.pow(a, b);
  }
};

console.log(object.data);
console.log(object.fn1(3));
console.log(object.sum(2, object.data));
console.log(object.inc(10));
console.log(object.max(3, 9));
console.log(object.min(8, 10));
console.log(object.dec(8));

console.log(object['pow'](2, 2));
