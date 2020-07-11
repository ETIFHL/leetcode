//给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
//
// 注意:
//
//
// num 的长度小于 10002 且 ≥ k。
// num 不会包含任何前导零。
//
//
// 示例 1 :
//
//
//输入: num = "1432219", k = 3
//输出: "1219"
//解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
// "317189" k = 2
//
// 示例 2 :
//
//
//输入: num = "10200", k = 1
//输出: "200"
//解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
//
//
// 示例 3 :
//
//
//输入: num = "10", k = 2
//输出: "0"
//解释: 从原数字移除所有的数字，剩余为空就是0。
//
// Related Topics 栈 贪心算法

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length <= k) {
    return '0'
  }
  let stack = []
  for (let i = 0; i < num.length; ++i) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) { // 贪心算法，当还需要移除数字时，如果栈顶比当前数字更大，就移除掉
      stack.pop()
      k--
    }
    stack.push(num[i])
  }
  stack = stack.slice(0, stack.length - k) // 没有移除完，截取一下
  while (stack[0] === '0') { // 去除前导0
    stack.shift()
  }
  if (!stack.length) { // 栈空了的话返回字符串0
    return '0'
  }
  return stack.join('') // 正常返回
}
//leetcode submit region end(Prohibit modification and deletion)
