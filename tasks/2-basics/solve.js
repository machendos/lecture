'use strict';

module.exports.wrapper = fn => (arr, obj) => {
  const res = fn(arr, obj);
  console.log(`Transformed array: [${arr.join(', ')}]`);
  return res;
};

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

class AdvancedArray extends Array {
  wrapper(method) {
    const wrapped = function(obj) {
      const res = method.call(this, obj);
      console.log(`Transformed array: [${this.join(', ')}]`);
      return res;
    };
    return wrapped.bind(this);
  }

  unsideTransform(obj) {
    let res = [];
    let arr = this;
    arr = arr.slice(0);
    if (obj.sort) arr = arr.sort(obj.sort);
    if (obj.filter) arr = arr.filter(obj.filter);
    if (obj.shift) res.unshift(arr.shift());
    if (obj.pop) res.push(arr.pop());
    res = res.filter(el =>  el !== undefined);
    return res;
  }

  sideTransform(obj) {
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
//   filter: el => el,
//   pop: true,
//   shift: true
// };
// const wrap = arr.wrapper(arr.unsideTransform)(options);
// const res = wrap(options);
// console.log(res);
// console.log(arr);
