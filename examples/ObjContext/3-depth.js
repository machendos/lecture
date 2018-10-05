'use strict';

const Context = function() {
  this.name = 'Marcus';
  const city = {

    name: 'Kiev',
    year: 482,

    f1: function() {
      return this.name;
    },

    f2: () => this.name,

    f3() {
      const subF = () => this.name;
      return subF();
    },

    f4() {
      function subF() {
        return this.name;
      }
      return subF.call(this);
      // return(subF());
    }

  };
  return city;
};

const city = new Context();

console.log(city);

console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());
console.log('city.f4() = ' + city.f4());
