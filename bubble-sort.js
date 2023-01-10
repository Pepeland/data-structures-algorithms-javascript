function bubbleSort(array) {
    let isSorted;
    for (let i = 0; i < array.length; i++) {
        isSorted = true;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j + 1] < array[j]) {
                swap(array, j + 1, j);
                isSorted = false;
            }
        }
        if(isSorted)
            return array;
    }
    return array;
}

function swap(array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2];
    array[index2] = temp;
}

console.log(bubbleSort([8, 2, 4, 1, 3]));