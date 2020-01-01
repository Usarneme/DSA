const euclideanGCD = (a, b) => {
    if (b === 0) return a
    const aPrime = a % b
    return euclideanGCD(b, aPrime)
}

const startTime = Date.now()
const timeProfiler = timestamp => {
    return timestamp - startTime
}

console.log(`1.  gcd(1,1) = ${euclideanGCD(1,1)} \t${timeProfiler(Date.now())}`)
console.log(`2.  gcd(12,2) = ${euclideanGCD(12,2)} \t${timeProfiler(Date.now())}`)
console.log(`3.  gcd(15,5) = ${euclideanGCD(15,5)} \t${timeProfiler(Date.now())}`)
console.log(`4.  gcd(21,7) = ${euclideanGCD(21,7)} \t${timeProfiler(Date.now())}`)
console.log(`5.  gcd(222222,444444) = ${euclideanGCD(222222,444444)} \t${timeProfiler(Date.now())}`)
console.log(`6.  gcd(12345678,98765432) = ${euclideanGCD(12345678,98765432)} \t${timeProfiler(Date.now())}`)
console.log(`7.  gcd(732482347,2377371) = ${euclideanGCD(732482347,2377371)} \t${timeProfiler(Date.now())}`)
console.log(`8.  gcd(8179487124,9871297474) = ${euclideanGCD(8179487124,9871297474)} \t${timeProfiler(Date.now())}`)
console.log(`9.  gcd(17383483747,37373838374) = ${euclideanGCD(17383483747,37373838374)} \t${timeProfiler(Date.now())}`)
console.log(`10. gcd(1723483272987234932,82377237929238) = ${euclideanGCD(1723483272987234932,82377237929238)} \t${timeProfiler(Date.now())}`)
