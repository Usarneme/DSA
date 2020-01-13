const ITEM_WEIGHT = 0
const ITEM_VALUE = 1

const bestItem = (weightsAndValuesArr) => {
    const n = weightsAndValuesArr.length
    let maxValuePerWeight = 0.0
    let bestItemIndex = 0
    for (let i = 0; i < n; i += 1) {
        // console.log(`Checking item ${i}: ${weightsAndValuesArr[i]}`)
        if (weightsAndValuesArr[i][ITEM_WEIGHT] > 0) {
            const currentValPerWeight = weightsAndValuesArr[i][ITEM_VALUE] / weightsAndValuesArr[i][ITEM_WEIGHT]
            // console.log(`Weight: ${weightsAndValuesArr[i][ITEM_WEIGHT]}. Total Value: ${weightsAndValuesArr[i][ITEM_VALUE]}. Val per unit: ${currentValPerWeight}`)
            if (currentValPerWeight > maxValuePerWeight) {
                maxValuePerWeight = currentValPerWeight
                bestItemIndex = i
            }
        }
    }
    // console.log(`Best weight per value found at index ${bestItemIndex} with a value of ${maxValuePerWeight} per item.`);
    return bestItemIndex
}

// weightsAndValuesArray in format: [1,2,...n], 1...n = [weight, value] points pair array
const knapsack = (totalWeightRemaining, weightsAndValuesArr) => {
    const n = weightsAndValuesArr.length
    const amounts = []
    let totalValue = 0.0
    for (let i = 0; i < n; i += 1) {
        if (totalWeightRemaining > 0) {
            const bestIndex = bestItem(weightsAndValuesArr)
            amounts[i] = {}
            amounts[i]['IDX'] = bestIndex
            const weightToTake = Math.min(weightsAndValuesArr[bestIndex][ITEM_WEIGHT], totalWeightRemaining)
            // console.log(`Knapsack total weight remaining is ${totalWeightRemaining}. Taking ${weightToTake} of element ${bestIndex}`)
            totalValue += (weightToTake * (weightsAndValuesArr[bestIndex][ITEM_VALUE] / weightsAndValuesArr[bestIndex][ITEM_WEIGHT]))
            weightsAndValuesArr[bestIndex][ITEM_WEIGHT] -= weightToTake
            amounts[i]['AMT'] = weightToTake
            totalWeightRemaining -= weightToTake
            // console.log(`Knapsack weight remaining is ${totalWeightRemaining} after taking from element ${bestIndex}`)
        }
    }
    return [totalValue, amounts]
}


console.log(`Testing`)

const wAndVArr = [[2, 2],[3, 6],[4, 12]] // [[total weight of available product, total value of product],[],[]]
console.log(wAndVArr)
const test1 = knapsack(10, wAndVArr)
console.log(`W 10. Taken Items ${JSON.stringify(test1[1])} Val ${test1[0]}.`)

const wv2 = [[3,9], [2, 10], [10, 10]]
console.log(wv2)
const test2 = knapsack(10, wv2)
console.log(`W 10. Taken Items ${JSON.stringify(test2[1])} Val ${test2[0]}.`)

const wv3 = [[2,12], [15, 60], [1,15]]
console.log(wv3)
const test3 = knapsack(10, wv3)
console.log(`W 10. Taken Items ${JSON.stringify(test3[1])} Val ${test3[0]}.`)

const wv4 = [[2,12], [15, 60], [1,15]]
console.log(wv4)
const test4 = knapsack(15, wv4)
console.log(`W 15. Taken Items ${JSON.stringify(test4[1])} Val ${test4[0]}.`)

const wv5 = [[5,15], [10,50], [1,15]]
console.log(wv5)
const test5 = knapsack(15, wv5)
console.log(`W 15. Taken Items ${JSON.stringify(test5[1])} Val ${test5[0]}`)

const wv6 = [[5,15], [10,50], [15,15]]
console.log(wv6)
const test6 = knapsack(12, wv6)
console.log(`W 12. Taken Items ${JSON.stringify(test6[1])} Val ${test6[0]}`)

const wv7 = [[5,15], [10,50], [15,15]]
console.log(wv7)
const test7 = knapsack(4, wv7)
console.log(`W 4. Taken Items ${JSON.stringify(test7[1])} Val ${test7[0]}`)
