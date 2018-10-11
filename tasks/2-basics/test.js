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

  equal([], transform(arr, options));
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

  equal([], transform(arr, options));
  equal([], arr);
  equal([], transform([], options));
  equal([10], transform([10], options));

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
  assert.deepEqual(new Array(1, 2, 3) === new Advanced(1, 2, 3));
  let arr = new Advanced(1, 2, 3, 4, 5);
  let options = {
    sort: () => 1,
    filter: el => el,
    pop: true,
    shift: true
  };

  if (Advanced.prototype.unsideTransform) {
    equal([5, 1], arr.unsideTransform(arr, options));
    equal([4, 3, 2], arr);

    equal([], arr.unsideTransform(arr, options));
    equal([], arr);
    equal([], arr.unsideTransform([], options));
    equal([10], arr.unsideTransform([10], options));

    arr = new Advanced(17, 40, 60, 'str', {});
    options = {
      sort: () => -1,
      pop: true
    };
    equal([ {} ], arr.unsideTransform(arr, options));
  }

  if (Advanced.prototype.sideTransform) {
    equal([5, 1], arr.sideTransform(arr, options));

    equal([], arr.sideTransform(arr, options));
    equal([], arr.sideTransform([], options));
    equal([10], arr.sideTransform([10], options));

    arr = new Advanced(17, 40, 60, 'str', {});
    options = {
      sort: () => -1,
      pop: true
    };
    equal([ {} ], arr.sideTransform(arr, options));
    equal([17, 40, 60, 'str'], arr);
  }
}
