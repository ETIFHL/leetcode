/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 *
 * https://leetcode-cn.com/problems/range-addition-ii/description/
 *
 * algorithms
 * Easy (57.08%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    43.4K
 * Total Submissions: 76.1K
 * Testcase Example:  '3\n3\n[[2,2],[3,3]]'
 *
 * 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x
 * < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
 * 
 * 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 
 * 
 * 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
 * 输出: 4
 * 解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: m = 3, n = 3, ops =
 * [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
 * 输出: 4
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: m = 3, n = 3, ops = []
 * 输出: 9
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 
 * 
 * 1 <= m, n <= 4 * 10^4
 * 0 <= ops.length <= 10^4
 * ops[i].length == 2
 * 1 <= ai <= m
 * 1 <= bi <= n
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  const minArea = [m, n]
  ops.forEach(([x, y]) => {
    if(x !== 0 && y !== 0){
      minArea[0] = Math.min(x, minArea[0])
      minArea[1] = Math.min(y, minArea[1])
    }
  })
  return minArea[0] * minArea[1]
};
// @lc code=end

