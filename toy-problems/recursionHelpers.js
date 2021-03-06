'use strict';
/*
 * Print each item in an array in order using Helper Method Recursion
 *
 * Input:   Array
 * Output:  Undefined
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */

function printArray(arr){
  var index = 0;
  var length = arr.length - 1;

  var helper = function(index) {
    if (index > length) {
      return;
    } else {
      console.log(arr[index]);
      helper(index + 1);
    }
  }
  helper(index);

}


/*
 * Print each item in an array backwards using Helper Method Recursion
 *
 * Input:   Array
 * Output:  Undefined
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */

function printReverse(arr){
  var index = arr.length - 1;

  var helper = function(index) {
    if (index < 0) {
      return;
    } else {
      console.log(arr[index]);
    }
    helper(index - 1);
  }
  helper(index);
}


/*
 * Reverse a string using Helper Method Recursion
 *
 * Input:   String
 * Output:  String
 *
 * Example: reverseString('hello') => 'olleh'
 */

function reverseString(str){
  var splitStr = str.split('');
  var result = '';

  var helper = function(shortenedStr) {
   if (shortenedStr.length === 0) {
    return;
   } else {
    result += shortenedStr.pop();
   }
   helper(shortenedStr);
  }
  helper(splitStr);
  return result;
}


/*
 * Given an array of integers, create an array of two-item arrays using
 *     Helper Method Recursion
 *
 * Input:   Array of Integers
 * Output:  Array of two-item Arrays
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */

function arrayPairs(arr){
  var result = [];

  var helper = function(shortenedArr) {
    if (arr.length === 0) {
      return;
    } else {
      result.push([shortenedArr.shift(), shortenedArr.shift()]);
    }
    helper(shortenedArr);
  }
  helper(arr)
  return result;
}


/*
 * Flatten a nested array using Helper Method of Recursion
 *
 * Input:   Array of Integers and Arrays
 * Output:  Array of Integers
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */

function flatten(arr){
  var result = [];

  var helper = function(subArr) {
    for (var i = 0; i < subArr.length; i++) {
      if (!Array.isArray(subArr[i])) {
        result.push(subArr[i]);
      }
      helper(subArr[i]);
    }
  }
  helper(arr);
  return result;
}


/*
 * Given a base and an exponent, create a function to find the power using
 *     Helper Method Recursion
 *
 * Input:   Two Integers, base and exponent
 * Output:  Integer
 *
 * Example: power(3, 4) => 81
 */

function power(a, b){
  var result = 1;

  var multiply = function(counter) {
    if(counter === b) {
      return;
    } else {
      result *= a;
    }
    multiply(counter + 1);
  }
  multiply(0);
  return result;
}


/*
 * Merge two sorted arrays using the Helper Method Recursion
 *
 * Input:   Two Arrays, both sorted
 * Output:  Array, sorted
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */

function merge(arr1, arr2){
  var result = [];

  function recurse(p1, p2) {
    if(p1 === arr1.length) {
      result = result.concat(arr2.slice(p2));
      return;
    } else if(p2 === arr2.length) {
      result = result.concat(arr1.slice(p1));
      return;
    }

    if(arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else if(arr2[p2] < arr1[p1]) {
      result.push(arr2[p2]);
      p2++;
    }
    recurse(p1, p2);
  }

  recurse(0, 0);
  return result;
}








////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// code for capturing console.log output
var record = [];


console.log('printArray tests');
var testCount = [0, 0];

assert(testCount, 'able to print the elements of [1,2,3] forwards', function(){
  record = captureLog(printArray.bind(this, [1,2,3]));
  return record.length === 3 && record[0] === 1 && record[1] === 2 && record[2] === 3;
});

assert(testCount, 'does not print for an empty array', function(){
  record = captureLog(printArray.bind(this, []));
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', function(){
  record = captureLog(printArray.bind(this, [5]));
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printReverse tests');
var testCount = [0, 0];

assert(testCount, 'able to print the elements of [1,2,3] backwards', function(){
  record = captureLog(printReverse.bind(this, [1,2,3]));
  return record.length === 3 && record[0] === 3 && record[1] === 2 && record[2] === 1;
});

assert(testCount, 'does not print for an empty array', function(){
  record = captureLog(printReverse.bind(this, []));
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', function(){
  record = captureLog(printReverse.bind(this, [5]));
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('reverseString tests');
var testCount = [0, 0];

assert(testCount, 'able to reverse string \'hello\'', function(){
  var test = reverseString('hello');
  return test === 'olleh';
});

assert(testCount, 'able to return an empty string for empty string input', function(){
  var test = reverseString('');
  return test === '';
});

assert(testCount, 'able to return the same character for a single-character input string', function(){
  var test = reverseString('b');
  return test === 'b';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('arrayPairs tests');
var testCount = [0, 0];

assert(testCount, 'should return [[1,2],[3,4],[5,6]] output for [1,2,3,4,5,6] input', function(){
  var test = arrayPairs([1,2,3,4,5,6]);
  return test.length === 3 &&
    test[0][0] === 1 && test[0][1] === 2 &&
    test[1][0] === 3 && test[1][1] === 4 &&
    test[2][0] === 5 && test[2][1] === 6;
});

assert(testCount, 'should return [[1,2],[3,4],[5,undefined]] output for [1,2,3,4,5] input', function(){
  var test = arrayPairs([1,2,3,4,5]);
  return test.length === 3 &&
    test[0][0] === 1 && test[0][1] === 2 &&
    test[1][0] === 3 && test[1][1] === 4 &&
    test[2][0] === 5 && test[2][1] === undefined;
});

assert(testCount, 'should return [] output for [] input', function(){
  var test = arrayPairs([]);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('flatten tests');
var testCount = [0, 0];

assert(testCount, 'should return [1,2,3,4,5,6] output for [1, [2, 3, [4]], 5, [[6]]] input', function(){
  var test = flatten([1, [2, 3, [4]], 5, [[6]]]);
  return test.length === 6 &&
    test[0] === 1 && test[1] === 2 &&
    test[2] === 3 && test[3] === 4 &&
    test[4] === 5 && test[5] === 6;
});

assert(testCount, 'should return [] output for [] input', function(){
  var test = flatten([]);
  return test.length === 0;
});

assert(testCount, 'should return [1,2,3,4,5,6] output for [1, [2, 3, [4], []], [], 5, [[], [6]]] input (note the empty arrays)', function(){
  var test = flatten([1, [2, 3, [4], []], [], 5, [[], [6]]]);
  return test.length === 6 &&
    test[0] === 1 && test[1] === 2 &&
    test[2] === 3 && test[3] === 4 &&
    test[4] === 5 && test[5] === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('power tests');
var testCount = [0, 0];

assert(testCount, 'should return 81 for 3 to the 4th power', function(){
  var test = power(3, 4);
  return test === 81;
});

assert(testCount, 'should return 1 for 5 to the 0th power', function(){
  var test = power(5, 0);
  return test === 1;
});

assert(testCount, 'should return 1 for 1 to the 100th power', function(){
  var test = power(1, 100);
  return test === 1;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('merge tests');
var testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 6, 7, 9] when merging [1, 4, 7]' +
  ' and [2, 3, 6, 9]', function(){
  var test = merge([1,4,7], [2,3,6,9]);
  return test.length === 7 &&
    test[0] === 1 &&
    test[1] === 2 &&
    test[2] === 3 &&
    test[3] === 4 &&
    test[4] === 6 &&
    test[5] === 7 &&
    test[6] === 9;
});

assert(testCount, 'should handle inputs when left argument is empty array', function(){
  var test = merge([], [2,3,6,9]);
  return test.length === 4 &&
    test[0] === 2 &&
    test[1] === 3 &&
    test[2] === 6 &&
    test[3] === 9;
});

assert(testCount, 'should handle inputs when right argument is empty array', function(){
  var test = merge([1,4,7], []);
  return test.length === 3 &&
    test[0] === 1 &&
    test[1] === 4 &&
    test[2] === 7;
});

assert(testCount, 'should handle two empty arrays as inputs', function(){
  var test = merge([], []);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');




// example below
//
// directions: captureLog function returns an array of all elements that were
//             printed using console.log with the function that it is given.
//             Note that the function given to captureLog must be fed arguments
//             using function binding. Otherwise, pass it in with an anonymous
//             function.

function captureLog(toRun){

  var record = [];
  (function () {
    var log = console.log;
    console.log = function () {
      record = record.concat(Array.prototype.slice.call(arguments));
      log.apply(this, Array.prototype.slice.call(arguments));
    };
  }());

  toRun.apply(this, arguments);
  return record;
}


// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed
function assert(count, name, test){
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  var pass = 'false';
  var errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}


