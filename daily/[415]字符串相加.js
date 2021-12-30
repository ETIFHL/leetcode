//给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
//
//
//
// 提示：
//
//
// num1 和num2 的长度都小于 5100
// num1 和num2 都只包含数字 0-9
// num1 和num2 都不包含任何前导零
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
//
// Related Topics 字符串


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let add = 0
  let i = num1.length - 1
  let j = num2.length - 1
  let res = ''
  while (i >= 0 || j >= 0) {
    let n = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + add
    if(n >= 10){
      n -= 10
      add = 1
    } else {
      add = 0
    }
    res = n + res
    i--
    j--
  }
  if (add) {
    res = 1 + res
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
// time O(n + m)
// space O(n + m)

