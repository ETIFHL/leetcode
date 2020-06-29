//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
//
// 输入: "()"
//输出: true
//
//
// 示例 2:
//
// 输入: "()[]{}"
//输出: true
//
//
// 示例 3:
//
// 输入: "(]"
//输出: false
//
//
// 示例 4:
//
// 输入: "([)]"
//输出: false
//
//f
// 示例 5:
//
// 输入: "{[]}"
//输出: true
// Related Topics 栈 字符串

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length & 1) {
    return false // 奇数长度必然错误
  }
  const stack = []
  let n = 0
  const trans = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  while (s[n]) {
    if (['{', '(', '['].includes(s[n])) {
      stack.push(s[n])
    } else {
      if (stack.pop() !== trans[s[n]]) {
        return false
      }
    }
    n++
  }
  return true
}
// 时间 O(n)
// 空间 O(n)
