'use strict';

const fs = require('fs');

module.exports.wrapper = fn => (arr, obj) => {
  const res = fn(arr, obj);
  const message = `Transformed array: [${arr.join(', ')}]`;
  fs.writeFile('TransformedArray.txt', message, err => {
    if (err) console.log(err);
  });
  return res;
};

module.exports.unsideTransform = function(arr, obj) {
  let res = [];
  arr = arr.slice();
  if (obj.sort) arr.sort(obj.sort);
  if (obj.filter) arr = arr.filter(obj.filter);
  if (obj.shift) res.unshift(arr.shift());
  if (obj.pop) res.push(arr.pop());
  res = res.filter(el =>  el !== undefined);
  return res;
};

module.exports.sideTransform = function(arr, obj) {
  let res = [];
  if (obj.sort) arr.sort(obj.sort);
  if (obj.filter) {
    arr.forEach((element, i) => {
      if (!obj.filter(element)) arr.splice(i, 1);
    });
  }
  if (obj.shift) res.unshift(arr.shift());
  if (obj.pop) res.push(arr.pop());
  res = res.filter(el => el !== undefined);
  return res;
};

class AdvancedArray extends Array {
  constructor(...args) {
    super(...args);
  }
  wrapper(method) {
    const wrapped = function(obj) {
      const res = method.call(this, obj);
      const message = `Transformed array: [${this.join(', ')}]`;
      fs.writeFile('TransformedArray.txt', message, err => {
        if (err) console.log(err);
      });
      return res;
    };
    return wrapped.bind(this);
  }

  unsideTransform(obj) {
    let res = [];
    let arr = this.slice();
    if (obj.sort) arr.sort(obj.sort);
    if (obj.filter) arr = arr.filter(obj.filter);
    if (obj.shift) res.unshift(arr.shift());
    if (obj.pop) res.push(arr.pop());
    res = res.filter(el =>  el !== undefined);
    return res;
  }

  sideTransform(obj) {
    let res = [];
    if (obj.sort) this.sort(obj.sort);
    if (obj.filter) {
      this.forEach((element, i) => {
        if (!obj.filter(element)) this.splice(i, 1);
      });
    }
    if (obj.shift) res.unshift(this.shift());
    if (obj.pop) res.push(this.pop());
    res = res.filter(el => el !== undefined);
    return res;
  }
}

module.exports.AdvancedArray = AdvancedArray;

module.exports.AdvancedArray.prototype.unsideTransform = AdvancedArray
  .prototype.unsideTransform;

module.exports.AdvancedArray.prototype.sideTransform = AdvancedArray
  .prototype.sideTransform;

// const arr = new AdvancedArray(1, 2, 3, 4, 5);
// const options = {
//   sort: () => 1,
//   filter: el => el > 3,
//   pop: true,
//   shift: true
// };
// const wrap = arr.wrapper(arr.unsideTransform);
// const res = wrap(options);
// console.log(res);
// console.log(arr);
