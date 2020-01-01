const greatestCommonDivisor = (a, b) => {
    let gcd = 0
    for (let i = 1; i < a + b; i += 1) {
        if (a % i === 0 && b % i === 0) {
            gcd = i
        }
    }
    return gcd
}

const startTime = Date.now()
const timeProfiler = timestamp => {
    return timestamp - startTime
}

console.log(`1.  gcd(1,1) = ${greatestCommonDivisor(1,1)} \t${timeProfiler(Date.now())}`)
console.log(`2.  gcd(12,2) = ${greatestCommonDivisor(12,2)} \t${timeProfiler(Date.now())}`)
console.log(`3.  gcd(15,5) = ${greatestCommonDivisor(15,5)} \t${timeProfiler(Date.now())}`)
console.log(`4.  gcd(21,7) = ${greatestCommonDivisor(21,7)} \t${timeProfiler(Date.now())}`)
console.log(`5.  gcd(222222,444444) = ${greatestCommonDivisor(222222,444444)} \t${timeProfiler(Date.now())}`)
console.log(`6.  gcd(12345678,98765432) = ${greatestCommonDivisor(12345678,98765432)} \t${timeProfiler(Date.now())}`)
console.log(`7.  gcd(732482347,2377371) = ${greatestCommonDivisor(732482347,2377371)} \t${timeProfiler(Date.now())}`)
console.log(`8.  gcd(8179487124,9871297474) = ${greatestCommonDivisor(8179487124,9871297474)} \t${timeProfiler(Date.now())}`)
console.log(`9.  gcd(17383483747,37373838374) = ${greatestCommonDivisor(17383483747,37373838374)} \t${timeProfiler(Date.now())}`)
console.log(`10. gcd(1723483272987234932,82377237929238) = ${greatestCommonDivisor(1723483272987234932,82377237929238)} \t${timeProfiler(Date.now())}`)
