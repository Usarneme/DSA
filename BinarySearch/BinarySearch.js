// Binary Seach takes a sorted (important) array of values and a value to search for
// If the searched-for value is in the array true is return, otherwise false
function binarySearch(arr, searchValue) {
    // sanity check inputs
    if (searchValue === null) {
        console.log("Error. No value to search for provided.")
        return false
    }
    if (arr === null) {
        console.log("Error. Array is empty")
        return false
    }
    const len = arr.length // optimization to preclude need for multiple lookups
    if (len === 0) {
        console.log("Error. Array is empty")
        return false
    }

    if (len === 1) {
        if (arr[0] === searchValue) return true
        console.log(`Array does not contain value ${searchValue}`)
        return false
    } else {
        // console.log(`Searching val ${searchValue} within array ${arr}`)
        const middleIndex = Math.floor(len/2)
        if (arr[middleIndex] === searchValue) {
            console.log(`Match found! ${arr[middleIndex]} = ${searchValue}.`)
            return true
        } else {
            const right = arr.slice(middleIndex,len)
            const left = arr.slice(0,middleIndex)
            // console.log(`Array middleValue ${arr[middleIndex]}: split into left ${left} and right ${right}`)

            const remainingHalfArray = arr[middleIndex] < searchValue ? right : left
            binarySearch(remainingHalfArray, searchValue)
        }
    } 
}

const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const val = 7

binarySearch(sortedArray, val)