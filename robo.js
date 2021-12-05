let arr = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

let addressR = arr.findIndex((num) => num === 1);
console.log(addressR);
let x = (addressR % 7) + 1;
let y = addressR / 7 + 1;
let n = Math.abs(4 - x) + Math.abs(4 - y);

console.log(n);

// const fs = require('fs');
// const data = fs.readFileSync(0, 'utf-8');

// const [a, b] = data.split(' ').map(x => parseInt(x));
// process.stdout.write( '' + (a+b) );

// let arr=[0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0,
//     1, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0,
// ]
