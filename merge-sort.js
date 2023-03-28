function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]));
console.log(mergeSort([8, 5, 2, 9, 5]));
// console.log(mergeSort([2, 1]));
console.log(mergeSort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1]));