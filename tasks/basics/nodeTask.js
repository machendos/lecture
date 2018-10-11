'use strict';

const fs = require('fs');

const collection = {
  sort: (arg1, arg2) => {
    if (arg1 > arg2) return 1;
    if (arg1 < arg2) return -1;
    if (arg1 === arg2) return 0;
  },
  shift: true,
  pop: true
};

class ArrayAdvanced extends Array {
  constructor(...elements) {
    super(...elements);
  }
  specialSort(collection) {
    if (collection.sort) this.sort(collection.sort);
    if (collection.shift) this.shift();
    if (collection.pop) this.pop();
    return this;
  }
  log() {
    fs.writeFile('log.json', JSON.stringify(this), 'utf-8', err => {
      if (err) throw err;
      console.log(`Array logged to log.son file: ${this}`);
    })
  }
}

const filtred = new ArrayAdvanced(4, 7, 12, 16, 90, 0, 567, 400, 123, 657);
filtred.specialSort(collection);
filtred.log();

