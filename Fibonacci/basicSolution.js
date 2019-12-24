module.exports = fibo = function(n) {
    if (n <= 1) return n
    return (fibo(n - 1) + fibo(n - 2))
}

// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(10))
// console.log(fibo(20))
// console.log(fibo(30))
// console.log(fibo(40))
// console.log(fibo(50)) 50+ takes a long time to compute
