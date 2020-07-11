//给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
//
// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
//
//
//
//
//
// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
//
// 1,2,2,3,2
//
//
//
// 图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
//
//
//
// 示例:
//
// 输入: [2,1,5,6,2,3]
//输出: 10
// Related Topics 栈 数组


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.unshift(0) // 加入哨兵
  heights.push(0)
  const stack = [0]
  let max = 0
  for (let i = 1; i < heights.length; ++i) {
    while (heights[i] < heights[stack[stack.length - 1]]) { // 栈顶元素比当前元素大，栈顶元素高度所能形成的最大矩形可以确定，开始计算
      const height = heights[stack.pop()] // 自然是计算栈顶元素的高度所能形成的最大矩形，顺便出栈
      const width = i - stack[stack.length - 1] - 1 // 此时的栈顶元素对应高度自然不大于需计算的高度。可能等于，等于时，下一个while将进行计算
      max = Math.max(max, height * width) // 围成的最大矩形
    }
    stack.push(i) // 当前元素入栈，当前元素必然为栈内最大值
  }
  // 有了哨兵，直接返回最大即可
  return max
};
//leetcode submit region end(Prohibit modification and deletion)
