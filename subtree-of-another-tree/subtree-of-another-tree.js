/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
let isSubtree = function (s, t) {
    return dfs(s, t)
}

function dfs (s, t) {
    if (s === null) {
        return false
    } 
    return isSame(s, t) || dfs(s.left, t) || dfs(s.right, t)
}

function isSame (s, t) {
    if (s === null && t === null) {
        return true
    }

    if (s === null && t!== null) {
        return false
    }

    if (t === null && s!== null) {
        return false
    }

    if (s.val !== t.val) {
        return false
    }

    return s.val === t.val && isSame(s.left, t.left) && isSame (s.right, t.right)

}