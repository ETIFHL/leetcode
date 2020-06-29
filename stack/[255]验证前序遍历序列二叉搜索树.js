//给定一个整数数组，你需要验证它是否是一个二叉搜索树正确的先序遍历序列。
//
// 你可以假定该序列中的数都是不相同的。
//
// 参考以下这颗二叉搜索树：
//
//      5
//    / \
//   2   6
//  / \
// 1   3
//
// 示例 1：
//
// 输入: [5,2,6,1,3]
//输出: false
//
// 示例 2：
//
// 输入: [5,2,1,3,6]
//输出: true
//
// 进阶挑战：
//
// 您能否使用恒定的空间复杂度来完成此题？
// Related Topics 栈 树

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  const stack = []
  let outMax = -Infinity // 已出栈的最大值
  for (let n of preorder) {
    while (n > stack[stack.length - 1]) { // 如果当前的值比栈尾大，说明进入了局部右子树，把比当前值小的左节点的值出栈
      outMax = stack.pop() // 后出栈的将更大，因为之前入栈的是左子树，为单调递减
    }
    if (n < outMax) { // 右子树的值比左子树已出栈的小时
      return false
    }
    stack.push(n)
  }
  return true
}
//leetcode submit region end(Prohibit modification and deletion)
