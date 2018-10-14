'use strict';

module.exports.unsideTransform = function(arr, obj) {
  let res = [];
  arr = arr.slice(0);
  if (obj.sort) arr = arr.sort(obj.sort);
  if (obj.filter) arr = arr.filter(obj.filter);
  if (obj.shift) res.unshift(arr.shift());
  if (obj.pop) res.push(arr.pop());
  res = res.filter(el =>  el !== undefined);
  return res;
};

module.exports.sideTransform = function(arr, obj) {
  let res = [];
  if (obj.sort) arr = arr.sort(obj.sort);
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

// function AdvancedArray(...args) {
//   Array.apply(this, args);
// }

// Object.setPrototypeOf(AdvancedArray.prototype, Array.prototype);

class AdvancedArray extends Array {}

module.exports.AdvancedArray = AdvancedArray;

AdvancedArray.prototype.unsideTransform = function(obj) {
  let res = [];
  let arr = this;
  arr = arr.slice(0);
  if (obj.sort) arr = arr.sort(obj.sort);
  if (obj.filter) arr = arr.filter(obj.filter);
  if (obj.shift) res.unshift(arr.shift());
  if (obj.pop) res.push(arr.pop());
  res = res.filter(el =>  el !== undefined);
  return res;
};

module.exports.AdvancedArray.prototype.unsideTransform = AdvancedArray
  .prototype.unsideTransform;

AdvancedArray.prototype.sideTransform = function(obj) {
  let res = [];
  let arr = this;
  if (obj.sort) arr = arr.sort(obj.sort);
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

module.exports.AdvancedArray.prototype.sideTransform = AdvancedArray
  .prototype.sideTransform;

// const arr = new AdvancedArray(1, 2, 3);
// console.dir(arr.toString());

// const arre = new Array(1, 2, 3);
// console.dir(arre.toString());

// console.log(Object.prototype.toString(arr));
// console.log(Object.prototype.toString(arre));

// console.log(Array.isArray(arr));
