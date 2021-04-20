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
  let smallest;

  while(placeHolder < arr.length - 1){
    if(arr[smallest] < arr[placeHolder]){

      swap(list, placeHolder, smallest);

    } else {

      placeHolder++;

    }
    smallest++;
  }
}

module.exports = {
  selectionSort,
  swap
};
