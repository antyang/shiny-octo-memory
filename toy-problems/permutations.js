function permutations(str) {
  var chars = str.split('');
  var results = [];

  function generate(array, permStr) {
    if(permStr.length === str.length) {
      results.push(permStr);
    } else {
      for(var i = 0; i < array.length; i++) {
        var letterHold = [];
        for(var j = 0; j < array.length; j++) {
          if(i !== j) {
            letterHold.push(array[j]);
          }
        }
        generate(letterHold, permStr + array[i]);
      }
    }
  }
  generate(chars, '');

  var result = results.filter(function(el, index) {
    return !el.match(/(.)\1+/g);
  });
  return result.join('\n');
}


/*
* Heap's Algorithm
*/

function permutations(input) {
  var array = input.split('');

  var swap = function(index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  var generate = function(n) {
    if(n === 1) {
      console.log(array.join(''));
    } else {
      for(var i = 1; i <= n; i++) {
        generate(n-1);
        if(n % 2 === 0) {
          var j = i;
        } else {
          var j = 1;
        }
        swap(j-1, n-1);
      }
    }
  }
  generate(input.length);
}


console.log(permutations('ant'))