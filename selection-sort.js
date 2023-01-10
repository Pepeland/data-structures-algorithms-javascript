function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++)
            if (array[j] < array[minIndex])
                minIndex = j;
        swap(array, minIndex, i);
    }
    return array;
}

function swap(array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2];
    array[index2] = temp;
}

console.log(selectionSort([8, 2, 4, 1, 3]));