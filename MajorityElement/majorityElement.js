const majorityElement = (n, valuesArray) => {
    const MAX = n/2
    const results = Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0)
    let result = 0 // 0 = no majority, 1 = majority element found

    valuesArray.forEach(val => {
        results[val] += 1
        if (results[val] > MAX) {
            // console.log(`\tn/2 found: ${results[val]}`)
            result = 1
        }
    })

    // console.log(`\tReturning results: ${results}`)
    return result
}

const inp1 = [1,2,3,3,3,3,4]
console.log(`Input ${inp1}. `)
console.log(`\t${majorityElement(inp1.length, inp1) === 1 ? "Majority Found!" : "No Majority" }`)

const inp2 = [1,2,3,3,3,3,4,5]
console.log(`Input ${inp2}. `)
console.log(`\t${majorityElement(inp2.length, inp2) === 1 ? "Majority Found!" : "No Majority" }`)

const inp3 = [1,2,3,3,3,3,3,4,5]
console.log(`Input ${inp3}. `)
console.log(`\t${majorityElement(inp3.length, inp3) === 1 ? "Majority Found!" : "No Majority" }`)

const inp4 = Array.from({length: 10}, () => parseInt(Math.random() * 10))
console.log(`Input ${inp4}. `)
console.log(`\t${majorityElement(inp4.length, inp4) === 1 ? "Majority Found!" : "No Majority" }`)

const inp5 = Array.from({length: 15}, () => parseInt(Math.random() * 10))
console.log(`Input ${inp5}. `)
console.log(`\t${majorityElement(inp5.length, inp5) === 1 ? "Majority Found!" : "No Majority" }`)

const inp6 = Array.from({length: 35}, () => parseInt(Math.random() * 10))
console.log(`Input ${inp6}. `)
console.log(`\t${majorityElement(inp6.length, inp6) === 1 ? "Majority Found!" : "No Majority" }`)

