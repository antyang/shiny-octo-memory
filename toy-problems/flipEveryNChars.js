/*

Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

function flipEveryNChars(string, num) {
  var result = [];
  var newStr = string.split('');
  while(newStr.length) {
    result.push(newStr.splice(0, num).reverse().join(''));
  }
  return result.join('');
}

var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma