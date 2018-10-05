'use strict';

const logger = (sender, date, city, sum) => {
  console.log('sender', sender, 'from', city);
  console.log('Date:', date);
  console.log('Sum:', sum, '\n');
};


logger(...['Danil',   '2018-10-03T23:35:58.517Z', 'Kiev',       1000]);
logger(...['Gena',    '2018-10-04T12:11:05.256Z', 'Washington', 1200]);
logger('Marcus',  ...['2018-10-04T22:00:56.792Z', 'Lima'],      5000);

const sub = [3, 4];
console.log([1, 2, ...sub, 5, 6]);
