'use strict';

const object = {
  data: 10,

  declaration: function incSum(a) {
    console.dir(this);
  },
  expresion: function(a, b) {
    console.dir(this);
  },
  arrow: (a, b) => {
    console.dir(this);
  },
}

object.declaration();
object.expresion();
object.arrow();
