'use strict';
const fs = require('fs');
function makeArrayCopy(arr) {
  return arr.slice();
}
function arrayDoDirty(arr, { sort, filter, shift, pop }) {
  const result = [];
  if (sort) arr.sort(sort);
  if (filter) {
    let i = 0;
    for (i; i < arr.length;) {
      if (filter(arr[i])) i++;
      else arr.splice(i, 1);
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
class ArrayDoDirty extends Array {
  arrayDo({ sort, filter, shift, pop }) {
    const result = arrayDoDirty(this, { sort, filter, shift, pop });
    return new ArrayDoDirty(...result);
  }
  logToFile(filename) {
    fs.writeFile(filename, this,
      (error) => { if (error) throw error; });
  }
}
class ArrayDoClean extends Array {
  arrayDo({ sort, filter, shift, pop }) {
    const result = arrayDoClean(this, { sort, filter, shift, pop });
    return new ArrayDoClean(...result);
  }
  logToFile(filename) {
    fs.writeFile(filename, this,
      (error) => { if (error) throw error; });
  }
}
