'use strict';

function logObj(obj) {
  return () => {
    let counter = 0;
    const res = [];

    for (const key in obj) {
      res[counter] = key + ': ' + obj[key] + ',';
      counter++;
    }
    res[counter - 1] = res[counter - 1].replace(',', '.');

    console.log(res.join('\n'));
    console.log('length: ' + counter);
  };
}

