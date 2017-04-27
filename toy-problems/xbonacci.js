function Xbonacci(signature, n) {
  var result = signature.slice(0, n);
  var len = signature.length;
  for(var i = len; i < n; i++) {
    result[i] = 0;
    for(var j = 1; j <= len; j++) {
      result[i] += result[i -j];
    }
  }
  return result;
}

console.log(Xbonacci([0,1],10)) //[0,1,1,2,3,5,8,13,21,34]
console.log(Xbonacci([1,1],10)) //[1,1,2,3,5,8,13,21,34,55]
console.log(Xbonacci([0,0,0,0,1],10)) //[0,0,0,0,1,1,2,4,8,16]
console.log(Xbonacci([1,0,0,0,0,0,1],10)) //[1,0,0,0,0,0,1,2,3,6]
console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0],20)) //[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]