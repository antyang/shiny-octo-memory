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
  for(var i = 0; i < temp.length; i++) {
    toInsert = temp[i];
    this.insert(toInsert);
  }
  console.log("deleteValue has been removed");
};

var test = new BinarySearchTree();
test.insert(4);
test.insert(3);
test.insert(5);
test.insert(7);

test.delete(5);

console.log(JSON.stringify(test, null, 2));