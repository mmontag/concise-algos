class Heap {
  constructor(comparator) {
    this.heap = [];
    this.inOrder = comparator || ((a, b) => a < b);
  }

  size() {
    return this.heap.length;
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  extractTop() {
    if (this.heap.length === 1) return this.heap.pop();

    const node = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return node;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const node = this.heap[index];
      const parentIndex = ((index - 1) / 2) | 0;
      const parent = this.heap[parentIndex];

      if (this.inOrder(parent.val, node.val)) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  siftDown(index) {
    let childIndex = index;
    const heap = this.heap;
    while (true) {
      const leftChIdx  = 2 * index + 1;
      const rightChIdx = 2 * index + 2;
      const leftChild  = heap[leftChIdx];
      const rightChild = heap[rightChIdx];

      if      (rightChild && this.inOrder(rightChild.val, leftChild.val)) childIndex = rightChIdx;
      else if (leftChild) childIndex = leftChIdx;
      else break;

      if (this.inOrder(heap[index].val, heap[childIndex].val)) break;

      this.swap(index, childIndex);
      index = childIndex;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
