const minimumTotalWaitingTime = (arrayOfTreatmentTimes) => {
    let totalWaitTime = 0 
    arrayOfTreatmentTimes.sort((a,b) => {
        return a - b
    })
    arrayOfTreatmentTimes.forEach((time, idx) => {
        totalWaitTime = totalWaitTime + ((arrayOfTreatmentTimes.length - idx - 1) * time)
    })
    return totalWaitTime
}

const example = [10,12,8,22,3]
console.log('Total aggregate time waited by all patients: '+minimumTotalWaitingTime(example)+' minutes.')

const example2 = [1,2,3,4,5]
console.log('Total aggregate time waited by all patients: '+minimumTotalWaitingTime(example2)+' minutes.')

const example3 = [1,1,2,2,5]
console.log('Total aggregate time waited by all patients: '+minimumTotalWaitingTime(example3)+' minutes.')
