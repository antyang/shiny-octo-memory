class MinHeap {
  constructor() {
    this.storage = [];
  }

  swap(index1, index2) {
    var temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  size() {
    return this.storage.length;
  }

  peak() {
    return this.storage.length ? this.storage[0] : null;
  }

  removePeak() {
    // swap first and last, then remove
    this.swap(0, this.size()-1);
    var rPeak = this.storage.pop();
    this.bubbleDown(0);
    return rPeak;
  }

  insert(value) {
    // this will not be in correct position
    this.storage.push(value);
    // so try bubbleUp
    this.bubbleUp(this.size()-1);
  }

  getParentIndex(childIndex) {
    if(childIndex % 2 === 0) {
      return (childIndex - 2) / 2;
    } else {
      return (childIndex - 1) / 2;
    }
  }

  getChildIndex(parentIndex) {
    var childIndex1 = 2 * parentIndex + 1;
    var childIndex2 = 2 * parentIndex + 2;

    if(childIndex1 >= this.size()) {
      return childIndex1;
    } else if(childIndex2 >= this.size()) {
      return childIndex1;
    } else if(this.storage[childIndex1] < this.storage[childIndex2]) {
      return childIndex1;
    } else {
      return childIndex2;
    }
  }

  bubbleUp(childIndex) {
    var parentIndex = this.getParentIndex(childIndex);

    while(childIndex > 0 && this.storage[parentIndex] > this.storage[childIndex]) {
      this.swap(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  bubbleDown(parentIndex) {
    var childIndex = this.getChildIndex(parentIndex);

    while (childIndex < this.size() && this.storage[childIndex] < this.storage[parentIndex]) {
      console.log("current storage:", this.storage);
      this.swap(childIndex, parentIndex);

      parentIndex = childIndex;
      childIndex = this.getChildIndex(parentIndex);
    }
  }

}

var MH = new MinHeap();
MH.insert(5);
MH.insert(3);
MH.insert(10);
MH.insert(9);
MH.insert(6);
MH.insert(1);
MH.insert(2);
MH.insert(12);
console.log(MH.storage);
console.log(MH.removePeak());
console.log(MH.storage);

