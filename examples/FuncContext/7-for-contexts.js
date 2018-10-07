'use strict';

const result = [];

let i;
for (; i < 4; i++) {
  console.log(1);
  result[i] = () => console.log(i);
}

result[0]();
result[1]();
result[2]();
result[3]();

// Try to initialize loop variable in 1st block of this loop
