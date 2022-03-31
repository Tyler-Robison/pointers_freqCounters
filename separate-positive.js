// will use 2 pointers, left at idx 0, right at idx arr.length - 1
// if left on neg, move right pointer until its on pos, swap

function separatePositive(arr, left = 0, right = arr.length - 1) {

    // base case
    if (left >= right) return arr

    // regular case
    if (arr[left] < 0 && arr[right] > 0) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        return separatePositive(arr, left + 1, right -1)
    }

    if (arr[left] < 0 && arr[right] < 0) {
        return separatePositive(arr, left, right - 1)
    }

    if (arr[left] > 0) return separatePositive(arr, left + 1, right)
}
