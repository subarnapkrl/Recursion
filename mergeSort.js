function mergeSort(array) {
  //BASE CASE: if the array has '0' or '1' elements, then the array is already sorted
  if (array.length <= 1) {
    return array;
  }

  //SPLIT THE ARRAY INTO TWO HALVES

  let middle = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, middle);
  let rightHalf = array.slice(middle);

  //RECURSIVELY MERGE SORT THE LEFTHALF & RIGHTHALF OF THE ARRAY

  let leftSorted = mergeSort(leftHalf);
  let rightSOrted = mergeSort(rightHalf);

  //MERGE THE TWO SORTED HALVES
  return merge(leftSorted, rightSOrted);
}

function merge(leftSIde, rightSIde) {
  const resultantArray = [];
  let leftIndex = 0;
  let rightINdex = 0;

  //COMPARE ELEMENTS FROM BOTH ARRAYS AND PUSH THE SMALLER ELEMENTS TO THE NEW ARRAY

  while (leftIndex < leftSIde.length && rightINdex < rightSIde.length) {
    if (leftSIde[leftIndex] < rightSIde[rightINdex]) {
      resultantArray.push(leftSIde[leftIndex]);
      leftIndex++;
    } else {
      resultantArray.push(rightSIde[rightINdex]);
      rightINdex++;
    }
  }

  //CONCATENATE ANY REMAINING ELEMENTS BOTH FROM ARRAY

  return resultantArray.concat(
    leftSIde.slice(leftIndex),
    rightSIde.slice(rightINdex)
  );
}

console.log(mergeSort([1, 0, 4, 7, 9]));
console.log(mergeSort([1, 0]));
console.log(mergeSort([0.1, 230, 24, 5, 10006]));
