'use strict';

const a = 1;
const b = 2;

const c = function() {
  const d = 3;
  console.dir({ a, b, c, d });
};

c();


// global {
// [[scope]]: null

// a = 100
// b = 2
// c = <Func>
// }

// c {
// [[scope]] = global


// d = 3
// }
