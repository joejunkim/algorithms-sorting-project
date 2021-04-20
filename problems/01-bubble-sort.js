// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  let i = 0;
  let j = i + 1;

  while (i < array.length - 1) {
    if (array[i] > array[j]) {
      swap(array, i, j);
      bubbleSort(array);
    }
    i++;
  }

  return array;
}

module.exports = {
  bubbleSort,
  swap
};
