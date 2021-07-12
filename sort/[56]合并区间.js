//以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返
//回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。 
//
// 
//
// 示例 1： 
//
// 
//输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
//输出：[[1,6],[8,10],[15,18]]
//解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 
//
// 示例 2： 
//
// 
//输入：intervals = [[1,4],[4,5]]
//输出：[[1,5]]
//解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。 
//
// 
//
// 提示： 
//
// 
// 1 <= intervals.length <= 104 
// intervals[i].length == 2 
// 0 <= starti <= endi <= 104 
// 
// Related Topics 数组 排序 
// 👍 997 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]) // 排序先
  let res = []
  let comp = intervals[0] // 比较的指针
  for (let i = 1; i < intervals.length; ++i) {
    let cur = intervals[i] // 当前比较的对象
    if (cur[0] > comp[1]) { // 对象的首位大于比较对象的末位，不相交
      res.push(comp)
      comp = cur
    } else { // 相交了，末位区更大的值
      comp[1] = Math.max(comp[1], cur[1])
    }
  }
  res.push(comp)
  return res
  // T: O(nlogn)
  // S: O(n)
};
//leetcode submit region end(Prohibit modification and deletion)
