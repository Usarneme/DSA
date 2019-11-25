function mergeSort(array) {
    const arrayLength = array.length
    let leftArray
    let rightArray
    
    if (arrayLength < 2) {
        return array
    } else {
        leftArray = array.slice(0,arrayLength/2) // first half of elements
        rightArray = array.slice(arrayLength/2) // second half of elements, will be larger in an odd-numbered element array
    }

    // console.log('Split left: '+leftArray)
    // console.log('Split right: '+rightArray)
    leftArray = mergeSort(leftArray)
    rightArray = mergeSort(rightArray)

    return merge(leftArray, rightArray)
}

function merge(leftArray, rightArray) {
    let sortedArray = []
    let i = 0
    let j = 0
    let sortedArrayIndex = 0

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            sortedArray[sortedArrayIndex] = leftArray[i]
            sortedArrayIndex = sortedArrayIndex + 1
            i = i + 1
        } else {
            sortedArray[sortedArrayIndex] = rightArray[j]
            sortedArrayIndex = sortedArrayIndex + 1
            j = j + 1
        }
    }

    while (i < leftArray.length) {
        sortedArray[sortedArrayIndex] = leftArray[i]
        sortedArrayIndex = sortedArrayIndex + 1
        i = i + 1
    }

    while (j < rightArray.length) {
        sortedArray[sortedArrayIndex] = rightArray[j]
        sortedArrayIndex = sortedArrayIndex + 1
        j = j + 1
    }

    // console.log("Returning from merge with array: "+sortedArray)
    return sortedArray
}

unsortedArray = [2,12,5,3,7,54,13]
console.log("MergeSorting: "+unsortedArray)
console.log("Completed MergeSort with result: "+mergeSort(unsortedArray))
