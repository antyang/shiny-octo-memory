function find_average(array) {
  return array.reduce(function(sum, curr) {
    sum += curr;
    return sum;
  }) / array.length;
}