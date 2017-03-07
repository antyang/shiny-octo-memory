function search(array, value) {
  var middle = Math.floor(array.length / 2);
  var length = array.length;

  if(array[middle] === value) {
    return 'found: ' + value;
  } else if(array[middle] > value && length > 1) {
    return search(array.slice(0, middle), value);
  } else if (array[middle] < value && length > 1) {
    return search(array.slice(middle), value);
  } else {
    return -1
  }
}

var sortedArr = [1, 3, 16, 22, 31, 33, 34];
search(sortedArr, 2)