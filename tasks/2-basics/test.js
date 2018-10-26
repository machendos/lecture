'use strict';

const solve = require(__dirname + '/solve.js');
const assert = require('assert');
const equal = assert.deepStrictEqual;

if (typeof(solve) !== 'object') throw new TypeError('Pls, export some object');

if (solve.unsideTransform) {
  const transform = solve.unsideTransform;
  let arr = [1, 2, 3, 4, 5];
  let options = {
    sort: () => 1,
    filter: el => el,
    pop: true,
    shift: true
  };
  equal([5, 1], transform(arr, options));
  equal([], transform([], options));
  equal([10], transform([10], options));

  arr = [17, 40, 60, 'str', {}];
  options = {
    sort: () => -1,
    pop: true
  };
  equal([ {} ], transform(arr, options));
}


if (solve.sideTransform) {
  const transform = solve.sideTransform;
  let arr = [1, 2, 3, 4, 5];
  let options = {
    sort: () => 1,
    filter: el => el,
    pop: true,
    shift: true
  };
  equal([5, 1], transform(arr, options));
  equal([4, 3, 2], arr);

  equal([], transform([], options));

  arr = [10];
  equal([10], transform(arr, options));
  equal([], arr);

  arr = [17, 40, 60, 'str', {}];
  options = {
    sort: () => -1,
    pop: true
  };
  equal([ {} ], transform(arr, options));
  equal([17, 40, 60, 'str'], arr);
}

if (solve.AdvancedArray) {
  const Advanced = solve.AdvancedArray;
  assert.deepEqual(new Array(1, 2, 3), new Advanced(1, 2, 3));

  if (Advanced.prototype.unsideTransform) {
    let arr = new Advanced(1, 2, 3, 4, 5);
    let options = {
      sort: () => 1,
      filter: el => el,
      pop: true,
      shift: true
    };
    equal([5, 1], arr.unsideTransform(options));

    arr = new Advanced();
    equal([], arr.unsideTransform(options));

    arr = new Advanced('10');
    equal(['10'], arr.unsideTransform(options));

    arr = new Advanced(17, 40, 60, 'str', {});
    options = {
      sort: () => -1,
      pop: true
    };
    equal([ {} ], arr.unsideTransform(options));
  }

  if (Advanced.prototype.sideTransform) {
    let arr = new Advanced(1, 2, 3, 4, 5);
    let options = {
      sort: () => 1,
      filter: el => el,
      pop: true,
      shift: true
    };
    equal([5, 1], arr.sideTransform(options));
    equal(new Advanced(4, 3, 2), arr);

    arr = new Advanced();
    equal([], arr.sideTransform(options));

    arr = new Advanced('10');
    equal(['10'], arr.sideTransform(options));
    equal(new Advanced(), arr);

    arr = new Advanced(17, 40, 60, 'str', {});
    options = {
      sort: () => -1,
      pop: true
    };
    equal([ {} ], arr.sideTransform(options));
    equal(new Advanced(17, 40, 60, 'str'), arr);
  }
}
