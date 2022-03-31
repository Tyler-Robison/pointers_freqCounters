// traverse through both strings, create obj which will contain chars as keys, freq as value
// 'cata' -> {c: 1, a: 2, t: 1}
// array.reduce
// if key hasn't been seen before, create it set value to 1, otherwise value++
// iterate through obj, make sure both are identical keys and values
function constructFreqObj(str) {
    return str.split('').reduce((accum, char) => {
        accum[char] = accum[char] + 1 || 1;
        return accum
    }, {})
}

function constructNote(str1, str2) {
    const freqObj1 = constructFreqObj(str1)
    const freqObj2 = constructFreqObj(str2)
    for (const [key, value] of Object.entries(freqObj1)) {
        if (freqObj2[key] < value || !freqObj2[key]) return false
    }
    return true
}
