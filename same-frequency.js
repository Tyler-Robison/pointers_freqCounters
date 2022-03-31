// add whatever parameters you deem necessary

function constructFreqObj2(num) {
    numStr = `${num}`
    return [...numStr].reduce((accum, char) => {
        accum[char] = accum[char] + 1 || 1;
        return accum
    }, {})
}

function sameFrequency(num1, num2) {
    const num1Freq = constructFreqObj2(num1)
    const num2Freq = constructFreqObj2(num2)
    for (const [key, value] of Object.entries(num1Freq)) {
        if (value !== num2Freq[key]) return false
    }
    return true
}
