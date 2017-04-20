var DLL = require('./doubleLinkedList');

class Queue {
  constructor() {
    this.storage = new DLL();
  }

  size () {
    return this.storage.listLength;
  }

  enqueue(value) {
    this.storage.addToTail(value);
  }

  dequeue() {
    return this.storage.removeFromHead().value;
  }
}

module.exports = Queue;
