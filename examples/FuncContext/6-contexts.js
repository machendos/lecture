'use strict';

const a = 0;

function f() {
  const a = 5;
}

if (true) {
  const a = 10;
}

for (let i = 0; i < 10; i++) {
  const a = 15;
}

try {
  let a = 20;
  a = 25;
} catch (err) {
  const a = 25;
}
