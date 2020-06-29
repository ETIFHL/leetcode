//给定一个二叉树，返回它的 前序 遍历。
//
// 示例:
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
//输出: [1,2,3]
//
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // recursion
  // function recursion(root, arr) {
  //   if (!root) return
  //   arr.push(root.val)
  //   recursion(root.left, arr)
  //   recursion(root.right, arr)
  // }
  // let arr = []
  // recursion(root, arr)
  // return arr
  
  // iteration
  // if (!root) {return []}
  // let stack = [root]
  // let arr = []
  // while (stack.length) {
  //   let node = stack.pop()
  //   arr.push(node.val)
  //   if (node.right) stack.push(node.right)
  //   if (node.left) stack.push(node.left)
  // }
  // return arr

  // iteration_2
  if (!root) {return []}
  let stack = []
  let res = []
  while (true) {
    while (root) {
      res.push(root.val)
      stack.push(root.right)
      root = root.left
    }
    if (!stack.length) break
    root = stack.pop()
  }
  return res
}
//leetcode submit region end(Prohibit modification and deletion)
