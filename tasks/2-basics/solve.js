'use strict';

const unsideTransform = function(arr, obj) {
  let res = [];
  arr = arr.slice(0);
  if (obj.sort) arr = arr.sort(obj.sort);
  if (obj.filter) arr = arr.filter(obj.filter);
  if (obj.shift) res.unshift(arr.shift());
  if (obj.pop) res.push(arr.pop());
  res = res.filter(el =>  el !== undefined);
  return res;
};

const sideTransform = function(arr, obj) {
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
