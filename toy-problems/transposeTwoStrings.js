function transposeTwoStrings(arrOfStrings) {
  var str1 = arrOfStrings[0];
  var str2 = arrOfStrings[1];
  var newStr1 = str1.split('');
  var newStr2 = str2.split('');
  var result = [];

  for(var i = 0; i < newStr1.length || i < newStr2.length; i++) {
    if(newStr1[i] === undefined) {
      result.push('  ' + newStr2[i]);
    } else if (newStr2[i] === undefined) {
      result.push(newStr1[i] + '  ');
    } else {
      result.push(newStr1[i] + ' ' + newStr2[i]);
    }
  }
  return result.join('\n');
}

// refactor
function transposeTwoStrings(arr){
  var result = [];
  var len = Math.max(arr[0].length, arr[1].length);

  for (var i = 0; i < len; i++) {
    var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
    result.push(column);
  }

  return result.join("\n");
}

transposeTwoStrings(['Hello','World']);
// H W
// e o
// l r
// l l
// o d