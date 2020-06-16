/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case '(':
                stack.push('(')
                break;
            case '{':
                stack.push('{')
                break;
            case '[':
                stack.push('[')
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false
                }
                break;
            default: 
                return false

        }
    }
    return stack.length > 0 ? false : true
};

isValid('()')