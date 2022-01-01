//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Mar
//cos 贡献此图。
// 4 3 2 1 4
// 示例:
//
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
//输出: 6
// Related Topics 栈 数组 双指针


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let count = 0
  const stack = [] // 单调递减栈
  for (let i = 0; i < height.length; ++i) {
    while (height[i] > height[stack[stack.length - 1]]) { // 当前元素比栈顶大
      const low = height[stack.pop()] // 取出的栈顶的元素为最低，有更低的话早就被出栈了
      if (!stack.length) { // 空了，接不了雨水，跳出。即将把当前元素，即最高的元素入栈，作为接雨水的左栏
        break
      }
      const width = i - stack[stack.length - 1] - 1 // 当前元素和左栏间的长度
      const height = Math.min(height[i], height[stack[stack.length - 1]]) - low // 最低到左右栏更低的那方的高度差，水量取决于短板
      count += width * height // 计入
    }
    stack.push(i) // 当前元素入栈
  }
  return count
};
//leetcode submit region end(Prohibit modification and deletion)
