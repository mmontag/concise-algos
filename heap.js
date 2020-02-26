const heap = [];

insert(value) {
  heap.push(value);
  bubbleUp();
}

extractMin() {
  const value = heap[0];
  heap[0] = heap.pop();
  siftDown(0);
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
  let index = heap.length - 1;
  while (index > 0) {
    const value = heap[index];
    const parentIndex = (index - 1) / 2 | 0;
    const parentValue = heap[parentIndex];
    if (parentValue.val <= value.val) break;
    swap(index, parentIndex);
    index = parentIndex;
  }
}

siftDown(index) {
  let bestIdx = index;
  while (true) {
    const leftChIdx = 2 * index + 1;
    const rightChIdx = 2 * index + 2;
    if (leftChIdx < heap.length && heap[leftChIdx].val < heap[bestIdx].val)
      bestIdx = leftChIdx;
    if (rightChIdx < heap.length && heap[rightChIdx].val < heap[bestIdx].val)
      bestIdx = rightChIdx;
    if (bestIdx != index) {
      swap(index, bestIdx);
      index = bestIdx;
    } else {
      break;
    }
  }
}

swap(a, b) {
  [heap[a], heap[b]] = [heap[b], heap[a]];
}
