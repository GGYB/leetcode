/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if ( needle.length === 0) {
        return 0
    }
    let next = getNext(needle) 
    let i = 0, j = 0
    while (i < haystack.length) {
        if (j == -1 || haystack[i] === needle[j]) {
            if (j == needle.length - 1) {
                return i - j
            } 
            ++i
            ++j
            
        } else {
            j = next[j]
        }
    }
    
    return -1

};

console.log( strStr('a', 'a'))

/**
 * 
 * @param {string} pattern 
 */
function getNext(pattern) {

    let next = [-1]
    let i = 0, j = -1
    while (i < pattern.length - 1) {
        if (j === -1 || pattern[i] == pattern[j]) {
            ++i;
            ++j;
            next[i] = j
        } else {
            j = next[j]
        }
    }

    return next
}