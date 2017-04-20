var DLL = require('./doubleLinkedList');

class Stack {
  constructor() {
    this.storage = new DLL();
  }

  size() {
    return this.storage.listLength;
  }

  push(value) {
    this.storage.addToTail(value);
  }

  pop() {
    return this.storage.removeFromTail().value;
  }
}

module.exports = Stack;