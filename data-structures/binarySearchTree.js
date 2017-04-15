/*
 *
 *              4
 *            /   \
 *          2       5
 *        /   \       \
 *      1       3       7
 *                    /   \
 *                  6      8
 */


'use strict';

function Node(value) {
  this.value = value || null;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree() {
  this.root = null;
  this.size = 0;
}

BinarySearchTree.prototype.insert = function(value) {
  if(this.root === null) {
    this.root = new Node(value);
    this.size++;
  }

  var findAndInsert = function(currentNode) {
    if(value > currentNode.value) {
      // look to right side
      if(currentNode.rightChild === null) {
        currentNode.rightChild = new Node(value);
      } else {
        findAndInsert(currentNode.rightChild);
      }
    }
    else if(value < currentNode.value) {
      // look to left side
      if(currentNode.leftChild === null) {
        currentNode.leftChild = new Node(value);
      } else {
        findAndInsert(currentNode.leftChild);
      }
    }
  }
  findAndInsert(this.root);
  this.size++;
};

BinarySearchTree.prototype.findMin = function() {
  var current = this.root;
  while(current.leftChild !== null) {
    current = current.leftChild;
  }
  return current.value;
};

BinarySearchTree.prototype.findMax = function() {
  var current = this.root;
  while(current.rightChild !== null) {
    current = current.rightChild;
  }
  return current.value;
};

BinarySearchTree.prototype.search = function(target) {
  var flag = false;

  var traverse = function(currentNode) {
    if(currentNode === null) {
      return;
    }
    else if(currentNode.value === target) {
      // found it!
      flag = true;
      return;
    }

    if(target > currentNode.value) {
      traverse(currentNode.rightChild);
    }
    else if(target < currentNode.value) {
      traverse(currentNode.leftChild);
    }
  }
  traverse(this.root);
  return flag;
};

BinarySearchTree.prototype.delete = function(deleteValue) {
  var temp = [];

  var roundUp = function(currentNode) {
    if(currentNode === null) {
      return;
    }

    if(currentNode.value !== deleteValue) {
      temp.push(currentNode.value);
    }

    roundUp(currentNode.rightChild);
    roundUp(currentNode.leftChild);
  }
  roundUp(this.root);

  if(temp.length === this.size) {
    console.log("deleteValue does not exist");
    return;
  }

  // re-inserting nodes
  this.root = null;
  this.size = 0;

  var toInsert;
  temp.forEach((el) => {
    toInsert = el;
    this.insert(toInsert);
  });
  console.log("deleteValue has been removed");
};

var bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(5);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(8);

bst.delete(5);

console.log('min: ', bst.findMin());
console.log('max: ', bst.findMax());


console.log(JSON.stringify(bst, null, 2));


BinarySearchTree.prototype.insertMany = function(array) {
  array.forEach((item) => {
    this.insert(item);
  })
};


/*
*     a. BREADTH FIRST traversal:
*         4 2 5 1 3 7 6 8
*
*     b. PRE-ORDER DEPTH first traversal print -> left -> right
*         4 2 1 3 5 7 6 8
*
*     c. IN-ORDER DEPTH first traversal left -> print -> right
*         1 2 3 4 5 6 7 8
*
*     d. POST-ORDER DEPTH first traversal left -> right -> print
*         1 3 2 6 8 7 5 4
*/

BinarySearchTree.prototype.breadthFirst = function() {
  if(!this.root) return [];

  var result = [];

  // array for simplicity
  var queue = [];
  queue.push(this.root);
  var current;

  while(queue.length) {
    // dequeue
    current = queue.shift();

    // enqueue
    if(current.leftChild !== null) {
      queue.push(current.leftChild);
    }
    if(current.rightChild !== null) {
      queue.push(current.rightChild);
    }

    result.push(current.value);
  }
  return result;
};


BinarySearchTree.prototype.preDepthFirst = function() {
};

BinarySearchTree.prototype.inDepthFirst = function() {
};

BinarySearchTree.prototype.postDepthFirst = function() {
};






////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// code for capturing console.log output
var record = [];
(function () {
  var log = console.log;
  console.log = function () {
    record = record.concat(Array.prototype.slice.call(arguments));
    log.apply(this, Array.prototype.slice.call(arguments));
  };
}());



console.log('insertMany tests');
var testCount = [0, 0];

assert(testCount, 'able to take in array of values and create binary search tree with corresponding values', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  return results.root.value === 4 &&
    results.root.leftChild.value === 2 &&
    results.root.leftChild.leftChild.value === 1 &&
    results.root.leftChild.rightChild.value === 3 &&
    results.root.rightChild.value === 5 &&
    results.root.rightChild.rightChild.value === 7 &&
    results.root.rightChild.rightChild.leftChild.value === 6 &&
    results.root.rightChild.rightChild.rightChild.value === 8;
});

assert(testCount, 'able to take in empty array and not create any nodes in BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  return results.root === null;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('breadthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in breadth first manner - [4,2,5,1,3,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.breadthFirst();
  return arraysEqual(test, [4,2,5,1,3,7,6,8]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.breadthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('preDepthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in pre-order depth first manner - [4,2,1,3,5,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.preDepthFirst();
  return arraysEqual(test, [4,2,1,3,5,7,6,8]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.preDepthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('inDepthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in in-order depth first manner - [4,2,1,3,5,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.inDepthFirst();
  return arraysEqual(test, [1,2,3,4,5,6,7,8]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.inDepthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

console.log('postDepthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return values of BST in post-order depth first manner - [4,2,1,3,5,7,6,8]', function(){
  var results = new BinarySearchTree();
  results.insertMany([4,2,5,1,3,7,6,8]);
  var test = results.postDepthFirst();
  return arraysEqual(test, [1,3,2,6,8,7,5,4]);
});

assert(testCount, 'returns an empty erray for an empty BST', function(){
  var results = new BinarySearchTree();
  results.insertMany([]);
  var test = results.postDepthFirst();
  return arraysEqual(test, []);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
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

