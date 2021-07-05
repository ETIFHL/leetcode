//给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
//
//
//
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
//
// 示例:
//
// 输入: 5
//输出:
//[
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//]
// Related Topics 数组 动态规划
// 👍 523 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = [
    [1]
  ]
  for(let i = 1; i < numRows; ++i){
    res.push(Array.from({length: i + 1}).map((item, index) => {
      return (res[i - 1][index] || 0) + (res[i - 1][index - 1] || 0)
    }))
  }
  return res
  // time: O(n^2)
  // space: O(1)
};
//leetcode submit region end(Prohibit modification and deletion)
