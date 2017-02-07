/**
* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
*
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
*
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

var twoSum = function(nums, target) {
  return nums.reduce(function(acc, curr, i) {
    var neededValue = target - curr;
    if(neededValue in acc) {
      acc.result.push(acc[neededValue]);
      acc.result.push(i);
    } else {
      acc[curr] = i;
    }
    return acc;
  }, {result:[]}).result;
};

console.log(twoSum([2, 7, 11, 15], 9));