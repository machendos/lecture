'use strict';

const f = (a, b, c) => {
  console.dir({ a, b, c });
};

const binded1 = f.bind(null, 1, 2);
binded1(3);
binded1(4);

const binded2 = f.bind(null, 10, 20, 30);
binded2(1000);
