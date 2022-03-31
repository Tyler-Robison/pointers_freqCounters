// 2 pointers one at left most position in each word
// iterate though second string looking for value of left pointer
// when find it, move left pointer right
// if left pointer = leftStr.length return true
// else return false
function isSubsequence(str1, str2, left = 0, right = 0) {
    
    // base case
    if (left === str1.length) return true
    if (right === str2.length) return false

    // regular case
    if(str2[right] === str1[left]) return isSubsequence(str1, str2, left + 1, right + 1);
    return isSubsequence(str1, str2, left, right + 1)
}
