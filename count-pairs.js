// add whatever parameters you deem necessary
function createNumObj(arr) {
    return arr.reduce((accum, nextNum) => {
        accum[nextNum] = nextNum;
        return accum;
    }, {})
}

// loop
function countPairs2(nums, target) {
    const numObj = createNumObj(nums)
    let count = 0;
    for (let num of nums) {
        const num2 = target - num

        if (typeof numObj[num2] === 'number' && numObj[num2] !== num) {
            count++
        }
    }
    // always doubles counts pairs
    return count / 2;
}

// same thing using array method
function countPairs(nums, target) {
    const numObj = createNumObj(nums)

    const result = nums.reduce((accum, nextNum) => {
        const num2 = target - nextNum
        if (typeof numObj[num2] === 'number' && numObj[num2] !== nextNum) {
            accum++
        }
        return accum
    }, 0)

    return result / 2
}
