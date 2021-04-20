// Implement Selection Sort
/*

  - set min placeholder
    - Search for smallest value(S)
      - if S < placeHoleder => swap
      - else placeHolder ++
  - repeat until placeholder = length

*/
// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(list) {
  let placeHolder = 0;
  while(placeHolder < list.length - 1) {
    let minIdx = placeHolder;
    let j = placeHolder;

    while (j <= list.length - 1) {
      if(list[j] < list[minIdx]) {
        minIdx = j;
      }
      j++;
    }

    swap(list, minIdx, placeHolder);
    placeHolder++;
  }
}

module.exports = {
  selectionSort,
  swap
};
