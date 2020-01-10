// The least common multiple of two positive integers 𝑎 and 𝑏 is the least positive 
// integer 𝑚 that is divisible by both 𝑎 and 𝑏.

const leastCommonMultiple = (a, b) => {
    const min = Math.min(a,b)
    const max = a * b
    let lcm = max
    for (let i = min; i < max; i += 1) {
        if (i % a === 0 && i % b === 0) {
            if (i < lcm) {
                lcm = i
            }
        }
    }
    return lcm
}

const lcmArr = (a,b) => {
    const max = a * b
    let lcm = max
    const aVals = []
    for (let i = a; i <= max; i += a) {
        aVals.push(i)
    }

    aVals.forEach(val => {
        if (val % b === 0) {
            if (val < lcm) {
                lcm = val
            }
        }
    })

    return lcm
}

console.log(`Testing LCM. \n`)
// console.log(`LCM(2,3)           - ${leastCommonMultiple(2,3)}`)
// console.log(`LCM(4,6)           - ${leastCommonMultiple(4,6)}`)
// console.log(`LCM(8,12)          - ${leastCommonMultiple(8,12)}`)
// console.log(`LCM(8,16)          - ${leastCommonMultiple(8,16)}`)
// console.log(`LCM(3,100)         - ${leastCommonMultiple(3,100)}`)
// console.log(`LCM(108,1226)      - ${leastCommonMultiple(108,1226)}`)
// console.log(`LCM(12208,19226)   - ${leastCommonMultiple(12208,19226)}`) // algo 1 gets slow here
// console.log(`LCM(443101,12926)  - ${leastCommonMultiple(443101,12926)}`) // 5,727,523,526 this took several minutes to compute

console.log(`LCM(2,3)           - ${lcmArr(2,3).toLocaleString()}`)
console.log(`LCM(4,6)           - ${lcmArr(4,6).toLocaleString()}`)
console.log(`LCM(8,12)          - ${lcmArr(8,12).toLocaleString()}`)
console.log(`LCM(8,16)          - ${lcmArr(8,16).toLocaleString()}`)
console.log(`LCM(3,100)         - ${lcmArr(3,100).toLocaleString()}`)
console.log(`LCM(108,1226)      - ${lcmArr(108,1226).toLocaleString()}`)
console.log(`LCM(12208,19226)   - ${lcmArr(12208,19226).toLocaleString()}`) 
console.log(`LCM(443101,12926)  - ${lcmArr(443101,12926).toLocaleString()}`) 
console.log(`LCM(1443101,212926)        - ${lcmArr(1443101,212926).toLocaleString()}`) 
console.log(`LCM(3443101,4412926)       - ${lcmArr(3443101,4412926).toLocaleString()}`) 
console.log(`LCM(55443101,6612926)      - ${lcmArr(55443101,6612926).toLocaleString()}`) // takes about 2 seconds
console.log(`LCM(983443101,14412926)    - ${lcmArr(983443101,14412926).toLocaleString()}`) // js loses accuracy due to large digits at this point, TODO implement BigNumber
console.log(`LCM(7473443101,24412926)   - ${lcmArr(7473443101,24412926).toLocaleString()}`) 
console.log(`LCM(23443443101,34412926)  - ${lcmArr(23443443101,34412926).toLocaleString()}`) // takes about 10 seconds to calculate
