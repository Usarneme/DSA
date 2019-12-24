const fiboSimple = require('./basicSolution')

function fibonacciFast(num) {
    const results = []
    results[0] = 0
    results[1] = 1

    for (let i = 2; i <= num; i += 1) {
        results[i] = (results[i - 1] + results[i - 2])
    }

    return results[num]
}

for (let i = 1; i < 45; i += 1) {
    console.log(`Comparing fiboSimple(${i}) with fiboFast(${i}). Same result: ${fiboSimple(i) === fibonacciFast(i)}`)
}


// console.log(fibonacciFast(1))
// console.log(fibonacciFast(2))
// console.log(fibonacciFast(3))
// console.log(fibonacciFast(4))
// console.log(fibonacciFast(5))
// console.log(fibonacciFast(10))
// console.log(fibonacciFast(20))
// console.log(fibonacciFast(30))
// console.log(fibonacciFast(40))
// console.log(fibonacciFast(50))
// console.log(fibonacciFast(60))
// console.log(fibonacciFast(70))
// console.log(fibonacciFast(80))
// console.log(fibonacciFast(90)) // JS loses precision here due to max int. BigInt or another library must be used
// console.log(fibonacciFast(100))
