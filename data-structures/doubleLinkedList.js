class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DLL {
  constructor() {
    this.head = this.tail = null;
    this.listLength = 0;
  }

  insert(value, index) {
    // if the index is greater than the size, do nothing
    if(index > this.listLength) {
      console.log('index is too large');
      return;
    } else if (index === 0 && this.listLength === 0) {
      this.head = this.tail = new Node(value);
    } else if (index === this.listLength) {
      var newNode = new Node(value);
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    } else {
      var current = this.head;
      var currentIndex = 1;
      while(currentIndex < index) {
        current = current.next;
        currentIndex++;
      }

      var newNode = new Node(value);
      newNode.previous = current;
      newNode.next = current.next;
      current.next.previous = newNode;
      current.next = newNode;
    }
    this.listLength++;
  }

  addToTail(value) {
    this.insert(value, this.listLength);
  }

  addToHead(value) {
    var newNode = new Node(value);
    if(this.head === null) {
      this.head = this.tail = newNode;
      this.listLength++;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.listLength++;
    }
  }

  removeFromHead() {
    if(this.length === 0) {
      return;
    } else if (this.length === 1) {
      var result = this.head;
      this.head = this.tail = null;
    } else {
      var result = this.head;
      this.head = this.head.next;
      this.head.previous = null;
      result.next = null;
    }
    this.listLength--;
    return result;
  }

  removeFromTail() {
    if(this.listLength === 0) {
      return;
    } else if (this.listLength === 1) {
      var result = this.tail;
      this.head = this.tail = null;
    } else {
      var result = this.tail;
      this.tail = this.tail.previous;
      this.tail.next = null;
      result.previous = null;
    }
    this.listLength--;
    return result;
  }
}