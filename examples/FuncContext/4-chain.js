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

const data = sumator();

const newData = data
  .add(10)
  .add(20)
  .add(30);

console.log(data === newData);
