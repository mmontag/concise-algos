class Heap {
  constructor(heap) {
    this.heap = heap || [];
  }
  size() {
    return this.heap.length;
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  extractMin() {
    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return value;
  }
  /*
  If array is 0-based:
    Parent      = (i - 1) / 2
    Left child  = 2 * i + 1
    Right child = 2 * i + 2

  If array is 1-based:
    Parent      = i / 2
    Left child  = 2 * i
    Right child = 2 * i + 1
  */
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const value = this.heap[index];
      const parentIndex = (index - 1) / 2 | 0;
      const parentValue = this.heap[parentIndex];
      if (parentValue.val <= value.val) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  siftDown(index) {
    let bestIdx = index;
    while (true) {
      const leftChIdx = 2 * index + 1;
      const rightChIdx = 2 * index + 2;
      if (leftChIdx < this.heap.length && 
          this.heap[leftChIdx].val < this.heap[bestIdx].val)
        bestIdx = leftChIdx;
      if (rightChIdx < this.heap.length && 
          this.heap[rightChIdx].val < this.heap[bestIdx].val)
        bestIdx = rightChIdx;
      if (bestIdx != index) {
        this.swap(index, bestIdx);
        index = bestIdx;
      } else {
        break;
      }
    }
  }
  swap(idxA, idxB) {
    const tmp = this.heap[idxA];
    this.heap[idxA] = this.heap[idxB];
    this.heap[idxB] = tmp;
  }
}
