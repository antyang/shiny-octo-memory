"use strict";
let time = require('./timer');

function makeAHugeString(iterations) {
  let x = "thisisahugestring";
  iterations = iterations || 8;
  for (let i = 0; i < iterations; i++) x += x + x;
  return x;
}

// quadratic
function reverse(str) {
  let reversedChars = [];
  str.split('')
     .forEach((char) => reversedChars.unshift(char));
  return reversedChars.join('');
}

// linear
function fastReverse(str) {
  return str.split('').reverse().join('');
}
console.log(makeAHugeString(8).length)
time(() => reverse(makeAHugeString(8)));
time(() => fastReverse(makeAHugeString(8)));
