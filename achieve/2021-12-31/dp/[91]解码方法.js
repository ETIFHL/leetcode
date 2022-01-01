//一条包含字母 A-Z 的消息通过以下方式进行了编码：
//
// 'A' -> 1
//'B' -> 2
//...
//'Z' -> 26
//
//
// 给定一个只包含数字的非空字符串，请计算解码方法的总数。
//
// 示例 1:
//
// 输入: "12"
//输出: 2
//解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
//
//
// 示例 2:
//
// 输入: "226"
//输出: 3
//解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
//
// Related Topics 字符串 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if(s[0] === '0'){
    return 0
  }
  let last = 1, current = 1
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === '0') {
      if (s[i - 1] === '1' || s[i - 1] === '2') {
        [current, last] = [last, current]
      } else {
        return 0
      }
    } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= 1 && s[i] <= 6)) {
      [last, current] = [current, last + current]
    } else {
      last = current
    }
  }
  return current
};
// time O(n)
// space O(1)

//leetcode submit region end(Prohibit modification and deletion)
