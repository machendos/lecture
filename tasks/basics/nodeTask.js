'use strict';

const fs = require('fs');

const collection = {
  sort: (arg1, arg2) => (arg1 > arg2 ? 1 : (arg1 < arg2 ? -1 : 0)),
  filter: (el) => (el <= 11 ? false : true),
  shift: true,
  pop: true
};

class ArrayAdvanced extends Array {
  constructor(...elements) {
    super(...elements);
  }
  specialSort(collection) {
    if (collection.sort) this.sort(collection.sort);
    if (collection.filter) this.splice(0, this.length, ...this.filter(collection.filter));
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
