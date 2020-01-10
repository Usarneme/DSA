const genMinCoinsNeededForChangeArray = (money, denominationsArr) => {
    // each index in minNumCoins is the minimum # of coins that will add up,
    // using the provided denominations, to the index value 0...n (0...money)
    const minNumCoins = new Array(money)
    minNumCoins[0] = 0

    for (let i = 1; i <= money; i += 1) {
        minNumCoins[i] = money // max would be money * 1 penny, setting a max for comparison to better coin combo solutions

        denominationsArr.forEach(coin => {
            if (i >= coin) { 
                let numCoins = minNumCoins[i - coin] + 1
                if (numCoins < minNumCoins[i]) {
                    minNumCoins[i] = numCoins
                } 
            }
        })
    }
    return minNumCoins
}

console.log(`Money: 15 cents. Possible Denominations: [1,5,10].\n`)
console.log(`Indices                            ${[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}...`)
console.log(`Minimum # of Coins For Each Value: ${genMinCoinsNeededForChangeArray(15, [1,5,10])}\n`)
// console.log(`Money:  5. Coins: [1,5,10]. --> ${genMinCoinsNeededForChangeArray(5, [1,5,10])}`)
const val1 = genMinCoinsNeededForChangeArray(100, [1,5,10])
// console.log(`Money: 100. Coins: [1,5,10]. --> ${val1}`)
console.log(`Number of coins needed for 23 cents:  ${val1[23]}`)
console.log(`Number of coins needed for 8 cents:   ${val1[8]}`)
console.log(`Number of coins needed for 62 cents:  ${val1[62]}`)
console.log(`Number of coins needed for 100 cents: ${val1[100]}`)
