'use strict';
const fs = require('fs');
function makeArrayCopy(arr) {
  return arr.slice();
}
function arrayDoDirty(arr, { sort, filter, shift, pop }) {
  const result = [];
  if (sort) {
    arr = arr.sort(sort);
  }
  if (filter) {
    let i = 0;
    for (i in arr) {
      if (!(filter(arr[i]))) arr.splice(i, 1);
    }
  }
  if (shift) {
    const arrShift = makeArrayCopy(arr);
    result.push(arrShift.shift());
  }
  if (pop) {
    const arrPop = makeArrayCopy(arr);
    result.push(arrPop.pop());
  }
  if (shift) arr.splice(0, 1);
  if (pop) arr.splice((arr.length - 1), 1);
  return result;
}
function arrayDoClean(arr, { sort, filter, shift, pop }) {
  const array = makeArrayCopy(arr);
  return arrayDoDirty(array, { sort, filter, shift, pop });
}
class ArrayDo extends Array {
  arrayDo({ sort, filter, shift, pop }) {
    const result = arrayDoDirty(this, { sort, filter, shift, pop });
    return new ArrayDo(...result);
  }
  logToFile(filename) {
    fs.writeFile(filename, this,
      (error) => { if (error) throw error; });
  }
}
