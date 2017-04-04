function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) {
      return mid;
    }
    if(target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

binarySearch([1,6,8,3,9,10], 6)