export const mergeSort = array => {
    if (array.length === 1) return array;

    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleIndex));
    const secondHalf = mergeSort(array.slice(middleIndex));

    let sortedArray = [];
    let i = 0, j = 0;

    // example [3,1,4,2,9]
    // firsthalf = [3,1,4]
    // secondhalf = [2,9]
    while (i < firstHalf.length && j < secondHalf.length) {
        // compare values in the first half and second half
        if (firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);
        } else {
            sortedArray.push(secondHalf[j++])
        }
    }


    // push the rest of the arrays into result
    while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    return sortedArray;
}