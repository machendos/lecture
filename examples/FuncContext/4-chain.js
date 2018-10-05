'use strict';

// ch? (arr)

function sumator() {
  const data = {
    number: 0,
    add: x => {
      data.number += x;
      return data;
    }
  };
  return { data };
}

const o = { a: 1 }

const data = sumator()

const newData = data.add(10)

console.log(data === newData);
