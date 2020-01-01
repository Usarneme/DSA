const minTotalWaitingTime = (arrayOfTreatmentTimes, numPatients) => {
    let totalTime = 0// wait time for all patients
    const treatedPatients = new Array(numPatients).fill(0) // 0 replaced with a 1 as each patient is treated
    const treatedPatientOrder = [] // lists the index of the patient array in the order they were treated

    for(let i = 0; i < arrayOfTreatmentTimes.length; i += 1) {
        let minTreatmentTime = 10000 
        let minTreatmentTimePatientIndex = 0

        for (let j = 0; j < numPatients; j += 1) {
            if (treatedPatients[j] === 0 && arrayOfTreatmentTimes[j] < minTreatmentTime) {
                minTreatmentTime = arrayOfTreatmentTimes[j]
                minTreatmentTimePatientIndex = j
            }
        }
        // console.log(`Wait added: ${(numPatients - i - 1) * minTreatmentTime}`)
        // each patient remaining has to wait while the patient with the min treatment time is treated (-1 as i is 0-indexed, only the remaining people are waiting not the patient being seen currently)
        totalTime = totalTime + ((numPatients - i - 1) * minTreatmentTime)

        treatedPatients[minTreatmentTimePatientIndex] = 1 // designate this patient has been treated
        treatedPatientOrder.push(minTreatmentTimePatientIndex)
    }
    // console.log(`Patients were treated in the following order: ${treatedPatientOrder}. Total time waiting for all patients: ${totalTime}`)
    return totalTime
}

const example = [10,12,8,22,3]
console.log('Total aggregate time waited by all patients: '+minTotalWaitingTime(example, example.length)+' minutes.')

const example2 = [1,2,3,4,5]
console.log('Total aggregate time waited by all patients: '+minTotalWaitingTime(example2, example2.length)+' minutes.')

const example3 = [1,1,2,2,5]
console.log('Total aggregate time waited by all patients: '+minTotalWaitingTime(example3, example3.length)+' minutes.')
