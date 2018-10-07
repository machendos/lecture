'use strict';

let a = 1;
const b = 2;

const f1 = () => {
  const d = 3;

  console.dir({ a, b });

  const f2 = () => {
    a = 100;
    const b = 50;
    console.dir({ a, b });
  };

  f2();
};

f1();

console.dir({ a, b });

/*
global {
  [[scope]]: null

  a = 1 (after L12 will be 100)
  b = 2
  f1 = <Func>
}

f1 {
  [[scope]] = global

  d = 3
  f2 = <Func>
}

f2 {
  [[scope]] = f1

  b = 50
}
*/
