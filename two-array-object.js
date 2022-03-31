// iterate through keys arr
// if there is a value in values arr, make key-value pair
// if no value set value to null
// if no key, we're done
function twoArrayObject(keyArr, valArr) {
    return keyArr.reduce((accum, nextKey, idx) => {
        accum[nextKey] = valArr[idx] || null;
        return accum;
    }, {})
}
