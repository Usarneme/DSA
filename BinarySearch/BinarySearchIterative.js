// Returns the index of the key if it is in the elements array
// If the key is not found, returns the index within the elements array where the key should be
const binarySearchIterative = (elementsArray, low, high, key) => {
    while (low <= high) {
        const midpoint = (low + Math.floor((high - low)/2))
        if (key === elementsArray[midpoint]) {
            return midpoint
        } else if (key < elementsArray[midpoint]) {
            high = midpoint - 1
        } else {
            low = midpoint + 1
        }
    }
    return low === 1 ? low - 1 : low // 0-indexed array
}

const sortedArray = [3,4,5,6,7,8,9,10,13,14,15,16,17,18,19,20]
//                  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

console.log(binarySearchIterative(sortedArray, 1, sortedArray.length, 7))
console.log(binarySearchIterative(sortedArray, 1, sortedArray.length, 11))
console.log(binarySearchIterative(sortedArray, 1, sortedArray.length, 2))
console.log(binarySearchIterative(sortedArray, 1, sortedArray.length, 24))
console.log(binarySearchIterative(sortedArray, 1, sortedArray.length, -1))
console.log(binarySearchIterative(sortedArray, 1, sortedArray.length, 10000))
