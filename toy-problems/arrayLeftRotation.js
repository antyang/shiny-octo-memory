/*
* Hacker Rank Array: Left Rotation
*/

function arrayLeftRotation(arr, shifts) {
  while(shifts !== 0) {
      arr.push(arr.shift());
      shifts -= 1;
  }
  return arr.join(' ');
}

console.log(arrayLeftRotation([1, 2, 3, 4, 5], 4)); // 5 1 2 3 4