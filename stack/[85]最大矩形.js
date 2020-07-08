//给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
//
// 示例:
//
// 输入:
//[
//  ["1","0","1","0","0"],
//  ["1","0","1","1","1"],
//  ["1","1","1","1","1"],
//  ["1","0","0","1","0"]
//]
//输出: 6
// Related Topics 栈 数组 哈希表 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if(!matrix.length){
    return  0
  }
  let max = 0 // 全局记录最大矩形
  // 动态规划计出当前行向上连续的柱状图高度
  const dp = Array.from({length: matrix[0].length}).fill(0)
  for (let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[i].length; ++j){
      dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0
    }

    // 加哨兵处理一下， 此时问题被转为求柱状图的最大矩形，以下代码同84
    dp.unshift(0)
    dp.push(0)
    const stack = [0]
    for (let k = 1; k < dp.length; ++k) {
      while (stack.length && dp[k] < dp[stack[stack.length - 1]]) {
        const height = dp[stack.pop()]
        const width = k - (stack.length ? stack[stack.length - 1] : 0) - 1
        max = Math.max(max, height * width)
      }
      stack.push(k)
    }
    // 处理后移除哨兵
    dp.pop()
    dp.shift()
  }
  return max
};
//leetcode submit region end(Prohibit modification and deletion)
