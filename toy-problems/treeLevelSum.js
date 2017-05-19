/*
Given a binary tree and a number k, your task is to find the sum of tree nodes at level k. The binary tree is represented by a string tree with the format: (<node-value>(<left subtree>)(<right subtree>)).

Example:

For input = "(10(5(3()())(8(6()())()))(17(13()())(23()())))" and k = 2, the output should be

treeLevelSum(input, k) = 47.

                    10
                /         \
              5             17
            /   \         /    \
           3     8       13     23
                /
              6
The nodes at level 2 are 3, 8, 13, and 23, so the answer is 3+8+13+23 = 47.
*/

function treeLevelSum(str, target) {
  var level = 0;
  var levelTwo = [];

  for(var i = 1; i < str.length; i++) {
    if(str[i] === '(') {
      level += 1;
    } else if(str[i] === ')') {
      level -= 1;
    }
    else {
      if(level === k) {
        if(str[i-1] !== '(' && str[i+1] === '(') {
          levelTwo.push(str[i-1] + str[i]);
        } else if(str[i-1] === '(' && str[i+1] === '(') {
          levelTwo.push(str[i]);
        }
      }
    }
  }

  return levelTwo.reduce(function(sum, curr) {
    sum += parseInt(curr, 10);
    return sum;
  }, 0);
}

var input = "(10(5(3()())(8(6()())()))(17(13()())(23()())))";
var k = 2;

var output = treeLevelSum(input, k) // => 47;
console.log(output);
