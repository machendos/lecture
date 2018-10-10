'use strict';

const object = {
  data: 10,

  declaration: function inc(a) {
    console.dir(this);
    return ++a;
  },
  expresion(a, b) {
    console.dir(this);
    return a + b;
  },
  arrow: (a, b) => {
    console.dir(this);
    return a + b;
  },
};

object.declaration();
object.expresion();
object.arrow();
