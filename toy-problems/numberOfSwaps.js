/*
* Input: Array of unsorted intergers
* Ouput: Number of moves to segregate even and odd numbers in array.
*/

function numberOfSwaps(arr) {
  let left = 0;
  let right = arr.length-1;
  let count = 0;

  while(left < right) {
    while(arr[left] % 2 === 0 && left < right) {
      left+=1;
    }
    while(arr[right] % 2 === 1 && left < right) {
      right-=1;
    }
    if(left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      count+=1;
      left+=1;
      right-=1;
    }
  }
  return count;
}

console.log(numberOfSwaps([4, 13, 10, 20]) === 1)
console.log(numberOfSwaps([5, 8, 5, 11, 4, 6]) === 2)