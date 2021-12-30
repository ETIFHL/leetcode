//在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
//
// 示例:
//
// 输入:
//
//1 0 1 0 0
//1 0 1 1 1
//1 1 1 1 1
//1 0 0 1 0
//
//输出: 4
// Related Topics 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0
  }
  const arr = Array.from({length: matrix.length}).map(i => Array.from({length: matrix[0].length}).fill(0))
  let max = 0
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] == 1) {
        if(i === 0 || j === 0){
          arr[i][j] = 1
        } else {
          arr[i][j] = Math.min(arr[i-1][j-1], arr[i][j-1], arr[i-1][j]) + 1
        }
        max = Math.max(max, arr[i][j])
      }
    }
  }
  return max * max
};
//leetcode submit region end(Prohibit modification and deletion)
