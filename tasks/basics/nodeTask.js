'use strict';

const fs = require('fs');

const collection = {
  sort: arr => arr.sort((a, b) => a - b),
  filter: arr => arr.filter(el => el > 10),
  shift: arr => arr.shift(),
  pop: arr => arr.pop()
};

const numbers = [4, 7, 12, 16, 90, 0, 567, 123, 657];

class ArrayAdvanced extends Array {
  constructor(array) {
    super();
    this.array = array.slice();
  }
  specialSort(collection) {
    if (collection.hasOwnProperty('sort')) collection.sort(this.array);
    if (collection.hasOwnProperty('filter')) this.array = collection.filter(this.array);
    if (collection.hasOwnProperty('shift')) collection.shift(this.array);
    if (collection.hasOwnProperty('pop')) collection.pop(this.array);
    return this.array;
  }
  log() {
    fs.writeFile('log.json', JSON.stringify(this.array), 'utf-8', err => {
      if (err) throw err;
      console.log('Array logged to log.son file.');
    })
  }
}

const filtred = new ArrayAdvanced(numbers);
filtred.specialSort(collection);
filtred.log();
