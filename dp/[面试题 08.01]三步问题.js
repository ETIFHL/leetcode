//三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模100
//0000007。 
//
// 示例1: 
//
// 
// 输入：n = 3 
// 输出：4
// 说明: 有四种走法
// 
//
// 示例2: 
//
// 
// 输入：n = 5
// 输出：13
// 
//
// 提示: 
//
// 
// n范围在[1, 1000000]之间 
// 
// Related Topics 记忆化搜索 数学 动态规划 
// 👍 59 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
  const dp = [1, 2, 4]
  for(let i = 3; i < n; ++i) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000007
  }
  return dp[n - 1]
  // time: O(n)
  // space: O(n) // 保留三位长度可以优化至O(1)
};
//leetcode submit region end(Prohibit modification and deletion)
