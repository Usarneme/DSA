const findBestItemIndex = (profitPerClick, avgClicksPerDay) => {
    const n = profitPerClick.length
    let maxTotalAdValue = 0.0
    let bestItemIndex = 0

    for (let i = 0; i < n; i += 1) {
        if (profitPerClick[i] !== 0) {
            const currTotalAdValue = profitPerClick[i] * avgClicksPerDay[i]
            if (currTotalAdValue > maxTotalAdValue) {
                maxTotalAdValue = currTotalAdValue
                bestItemIndex = i
            }
        }
    }
    return bestItemIndex
}

const maxAdRevenue = (numOfAvailableAdSlots, profitPerClick, avgClicksPerDay) => {
    const numPossibleAds = profitPerClick.length
    let totalValue = 0.0

    for (let i = 0; i < numPossibleAds; i += 1) {
        if (numOfAvailableAdSlots > 0) {
            const bestValIndex = findBestItemIndex(profitPerClick, avgClicksPerDay)

            totalValue += profitPerClick[bestValIndex] * avgClicksPerDay[bestValIndex]
            numOfAvailableAdSlots -= 1

            profitPerClick[bestValIndex] = 0
            avgClicksPerDay[bestValIndex] = 0
        }
    }
    return totalValue
}

const profits1 = [1,2,3,4,5]
const clicks1 = [5,4,3,2,1]
console.log(`Testing\nAd Space 5. Profits ${profits1}. Click Rate ${clicks1}`)
const test1 = maxAdRevenue(5, profits1, clicks1)
console.log(`Max Ad Revenue: ${test1}`) // => 1 * 5 + 2 * 4 + 3 * 3 + 4 * 2 + 5 * 1 = 35

const profits2 = [1,2,3,4,5]
const clicks2 = [5,4,3,2,1]
console.log(`Ad Space 3. Profits ${profits2}. Click Rate ${clicks2}`)
const test2 = maxAdRevenue(3, profits2, clicks2)
console.log(`Max Ad Revenue: ${test2}`) // => 2 * 4 + 3 * 3 + 4 * 2 = 25 

const profits3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const clicks3 =  [5,4,3,2,1,5,4,3,2,1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
console.log(`Ad Space 3. Profits ${profits3}. Click Rate ${clicks3}`)
const test3 = maxAdRevenue(3, profits3, clicks3)
console.log(`Max Ad Revenue: ${test3}`) // => 11 * 5 + 16 * 5 + 17 * 3, 55 + 80 + 68 = 203
