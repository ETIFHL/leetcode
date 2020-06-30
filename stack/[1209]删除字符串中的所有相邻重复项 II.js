//给你一个字符串 s，「k 倍重复项删除操作」将会从 s 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。
//
// 你需要对 s 重复进行无限次这样的删除操作，直到无法继续为止。
//
// 在执行完所有删除操作后，返回最终得到的字符串。
//
// 本题答案保证唯一。
//
//
//
// 示例 1：
//
// 输入：s = "abcd", k = 2
//输出："abcd"
//解释：没有要删除的内容。
//
// 示例 2：
//
// 输入：s = "deeedbbcccbdaa", k = 3
//输出："aa"
//解释：
//先删除 "eee" 和 "ccc"，得到 "ddbbbdaa"
//再删除 "bbb"，得到 "dddaa"
//最后删除 "ddd"，得到 "aa"
//
// 示例 3：
//
// 输入：s = "pbbcggttciiippooaais", k = 2
//输出："ps"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s 中只含有小写英文字母。
//
// Related Topics 栈

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [] // 栈记录元素的值和出现的次数, 如：[['a',1], ['a',2]]
  for (let i = 0; i < s.length; ++i) {
    if (stack.length && s[i] === stack[stack.length - 1][0]) { // 当前字母与前一个相同
      if (stack[stack.length - 1][1] === k - 1) { // 看是否到达K值
        let n = k - 1
        while (n) { // 删除K个元素
          stack.pop()
          n--
        }
      } else {
        stack.push([s[i], stack[stack.length - 1][1] + 1]) // 否则出现次数+1
      }
    } else {
      stack.push([s[i], 1]) // 首次出现
    }
  }
  return stack.map(i => i[0]).join('')
}
//leetcode submit region end(Prohibit modification and deletion)
