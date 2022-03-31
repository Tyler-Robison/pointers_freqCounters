// utilize two pointers, left/right
// left = idx 0
// right = idx arr.length - 1
// if arr[left] + arr[right] > 0  -> move right pointer left
// if arr[right] + arr[right] < 0  -> move left pointer right
// if pointers reach each other, return false
// if pointers arr[points] === 0 return true

function averagePair(arr, avg, left = 0, right = arr.length - 1) {
    if (arr.length === 0) return false

    // base case
    if (left === right) return false
    if ((arr[left] + arr[right]) / 2 === avg) return true

    // normal case
    return ((arr[left] + arr[right]) / 2 > avg ?
        averagePair(arr, avg, left, right - 1) :
        averagePair(arr, avg, left + 1, right))
}
