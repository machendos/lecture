'use strict';

// pow:

const createPower = n => x => Math.pow(x, n);

const square = createPower(2);
const cube = createPower(3);

console.log(Math.pow(10, 2));
console.log(square(10));

console.log(Math.pow(10, 3));
console.log(cube(10));

// log:

const log = (base, n) => Math.log(n) / Math.log(base);

const createLog = base => n => log(base, n);

const lg11 = createLog(11);
const ln = createLog(Math.E);

console.log('lg11(5) = ' + lg11(5));
console.log('ln(5) = ' + ln(5));
