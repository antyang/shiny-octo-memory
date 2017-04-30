function almost_palindromes(str) {
  var newStr = str.split('');
  var p1 = 0;
  var p2 = newStr.length-1;
  var track = 0;

  while(p1 < p2) {
    if(newStr[p1] !== newStr[p2]) {
      track += 1;
    }
    p1++;
    p2--;
  }
  return track;
}

console.log(almost_palindromes("abba"));
console.log(almost_palindromes("abcdcaa"));
console.log(almost_palindromes("aaabbb"));