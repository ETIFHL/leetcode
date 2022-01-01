//给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：
//
//
// () 得 1 分。
// AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
// (A) 得 2 * A 分，其中 A 是平衡括号字符串。
//
//
//
//
// 示例 1：
//
// 输入： "()"
//输出： 1
//
//
// 示例 2：
//
// 输入： "(())"
//输出： 2
//
//
// 示例 3：
//
// 输入： "()()"
//输出： 2
//
//
// 示例 4：
//
// 输入： "(()(()))"
//输出： 6
//
// ((())(()))
// ((1
// ((())((())(())))(()())
//
//
// 提示：
//
//
// S 是平衡括号字符串，且只含有 ( 和 ) 。
// 2 <= S.length <= 50
//
// Related Topics 栈 字符串

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
  const stack = []
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') { // 左括号直接入栈
      stack.push('(')
    } else { // 右括号情况
      if (stack[stack.length - 1] === '(') { // 前一个是左括号，为情况:()，转为 1 入栈
        stack.pop()
        stack.push(1)
      } else { // 前一个是数字，计算一下
        let n = stack.pop() // 前一个数字
        let m = stack.pop() // 再前一个字符
        while (m !== '(') { // 没有闭合，有多个数字，为情况 AB，加一下
          n = n + m
          m = stack.pop()
        }
        // 闭合了，变为情况(A)，乘以2即可
        stack.push(n * 2)
      }
    }
  }
  // 栈内数字累加返回
  return stack.reduce((a, b) => a + b, 0)
}
//leetcode submit region end(Prohibit modification and deletion)
