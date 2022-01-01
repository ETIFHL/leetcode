//给定一个二叉树，返回它的 后序 遍历。
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
//输出: [3,2,1]
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
var postorderTraversal = function(root) {
  // 递归
  // const arr = []
  // function recursive(node, arr) {
  //   if (node === null) {
  //     return
  //   }
  //   recursive(node.left, arr)
  //   recursive(node.right, arr)
  //   arr.push(node.val)
  // }
  // recursive(root, arr)
  // return arr

  // 迭代
  const stack = []
  const res = []
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    if (!node) { // 空节点，跳出
      continue
    }
    if (!node.inited) { // 从父级进入节点
      node.inited = true
      stack.push(node)
      stack.push(node.left)
      continue
    }
    if (!node.lefted) { // 从左侧回到节点
      node.lefted = true
      stack.push(node)
      stack.push(node.right)
      continue
    }
    res.push(node.val) // 从右侧回到节点
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)
