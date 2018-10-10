'use strict';

const f = function(a, b, c) {
  console.dir({ a, b, c });
};

f(1, 2, 3);
f(1, 2);
f();

const f2 = function(a, b = 200, c = 300) {
  console.dir({ a, b, c });
};

f2(1, 2, 3);
f2(1, 2);
f2(1);
f2();

// Old style for default parameter values
function fnOld(a, b, c) {
  b = (b === undefined ? 200 : b); // instead of b = b || 200
  c = (c === undefined ? 200 : c);
  console.dir({ a, b, c });
}

fnOld(1, 2, 3);
fnOld();

fnOld(1, 2, 0);
