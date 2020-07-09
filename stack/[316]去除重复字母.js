//给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
//
//
//
// 示例 1:
//
// 输入: "bcabc"
//输出: "abc"
//
//
// 示例 2:
//
// 输入: "cbacdcbc"
//输出: "acdb"
//
//
//
// 注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct
//-characters 相同
// Related Topics 栈 贪心算法

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = []
  for (let i = 0; i < s.length; ++i) {
    if (!stack.includes(s[i])) { // 栈内无此元素, 次数使用了js的api，用栈的话可使用hash表计数
      while (stack.length && s[i] < stack[stack.length - 1] && s.includes(stack[stack.length - 1], i + 1)) { // 当前元素字典序较栈顶小，且后续字符内仍有栈顶的元素时，出栈
        stack.pop()
      }
      stack.push(s[i])
    }
  }
  return stack.join('')
}
//leetcode submit region end(Prohibit modification and deletion)
