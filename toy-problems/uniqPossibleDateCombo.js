/*

All possible unique combinations

Output: #### - Month day

0131 - January 31 - invalid
1231 - December 31 - invalid

*/

function allPossibleDateCombo() {
  var result = [];
  var months = Array.apply(null, {length: 12}).map((e, i) => i+1);
  var days = Array.apply(null, {length: 31}).map((e, i) => i+1);

  months.forEach(function(month, i) {
  var mm = addZero(month);

    days.forEach(function(day, i) {
      var dd = addZero(day);

      var m = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
      var month = m[mm-1];
      var date = dd;

      // save only the unique combo
      if( !hasDupe(mm.split(''), dd.split('')) ) {
        result.push([mm+dd] + ' - ' + month + ' ' + date)
      }

    });
  });

  return result.join('\n');
}

// for each single digit, add a '0' before it, (01, 02...)
function addZero(num) {
  var newNum = num.toString();
  if(newNum.length === 1) {
    newNum = 0 + newNum;
  }
  return newNum;
}

// check for duplicates
function hasDupe(arr1, arr2) {
  var store = {};
  var flag = false;
    arr1.forEach(function(el) {
      if(store[el] === undefined) {
        store[el] = 1;
      } else {
        store[el]++;
    }
  })
    arr2.forEach(function(el) {
      if(store[el] === undefined) {
        store[el] = 1;
      } else {
        store[el]++;
      }
    })
    for(var key in store) {
      if(store[key] > 1) {
        flag = true;
      }
  }
  return flag;
}


function assertEqual(actual, expected, testName) {
  if(actual === expected) {
    console.log('passed');
  } else {
    console.log('failed: ' + testName);
  }
}

var resultingCombo = allPossibleDateCombo().split('\n')

var firstUniqCombo = resultingCombo[0];
var lastUniqCombo = resultingCombo[resultingCombo.length-1];


assertEqual(firstUniqCombo, "0123 - January 23", "should print first unique set");
assertEqual(lastUniqCombo, "1230 - December 30", "should print last unique set");



