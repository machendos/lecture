'use strict';

const a = 0;
console.log(a);

function f() {
  const a = 5;
  console.log(a);
}

f();

const b = true;
if (b) {
  const a = 10;
  console.log(a);
}

for (let i = 0; i < 10; i++) {
  const a = 15;
  console.log(a);
}

try {
  let a = 20;
  console.log(a);
  a = 25;
} catch (err) {
  const a = 25;
  console.log(a);
}
