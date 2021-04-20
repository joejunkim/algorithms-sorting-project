// Implement Insertion Sort
function swap(list, index1, index2){
  let temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}


function insertionSort(list) {
  // your code here

  let min = 100;
  
  for(let i = 1; i < list.length; i++){

    if(list[i + 1] < list[i]){

      for(let j = i; j < list.length; j++){

        if(list[i] < list[j]){

          swap(list, i, j)

        }

      }
      
    }

  }
}

let array = [ 2, -1, 3, 4, 3, 7];
insertionSort(array);

module.exports = {
  insertionSort
};
