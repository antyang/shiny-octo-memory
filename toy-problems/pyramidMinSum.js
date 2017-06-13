function pyramidMinSum(str) {
  // [ [], [] , [], ... ]
  var newPyramid = formatInput(str);
  var sum = [];
  var len = newPyramid.length - 1;

  for(var i = 0; i <= len; i++) {
    sum[i] = newPyramid[len][i];
  }

  // bottom-up approach
  for(var i = len - 1; i >= 0; i--) {
    for(var j = 0; j <= i; j++) {
      sum[j] = newPyramid[i][j] + Math.min(sum[j], sum[j + 1]);
    }
  }
  return sum[0];
}

// format string pyramid to nested arrays of numbers
function formatInput(str) {
  var formatted = [];
  var splitNewLine = str.split('\n');

  splitNewLine.forEach(function(el) {
    var splitStrNum = el.split(' ');
    formatted.push(splitStrNum);
  })

  return formatted.map(function(arr) {
    return arr.map(function(el) {
      return parseInt(el);
    })
  })
  return formatted;
}

var input = '1\n1 2\n1 2 3\n1 2 3 4';
var input2 = '1\n4 2\n7 2 8\n1 2 3 4';


console.log(pyramidMinSum(input) === 4);
console.log(pyramidMinSum(input2) === 7);
