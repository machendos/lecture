'use strict';

function inc(arg) {
  if (typeof(arg) === 'number') return ++arg;
  return arg;
}

console.log('inc(1): ' + inc(1));
console.log('inc("string"): ' + inc('string'));
