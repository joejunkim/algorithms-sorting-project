// Implement Merge Sort

function merge(array1, array2) {
let mergedArr = [];

  while(array1.length || array2.length){

    if(array1[0] < array2[0]){
  
      let holder = array1.shift();
      mergedArr.push(holder);
  
    } else {
  
      let holder = array2.shift();
      mergedArr.push(holder);

    }
  }

  return mergedArr.concat(array1).concat(array2);
  
}

function mergeSort(array) {
  
  if((array.length === 1) || (array.length === 0)){
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);


  let newLeft = mergeSort(left);
  let newRight = mergeSort(right);

  return merge(newLeft, newRight);
}

mergeSort([2, -1, 4, 3, 7, 3])

module.exports = {
  merge,
  mergeSort
};
