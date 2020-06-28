//给定一个二叉树，返回它的中序 遍历。
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
//输出: [1,3,2]
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树 哈希表


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
var inorderTraversal = function(root) {
  // 中序遍历， 左->中->右
  // recursion
  // function recursion(node, arr) {
  //   if (node === null) return
  //   if (node.left) recursion(node.left, arr)
  //   arr.push(node.val)
  //   if (node.right) recursion(node.right, arr)
  // }
  // let arr = []
  // recursion(root, arr)
  // return arr

  // iteration
  let arr = []
  let stack = []

  while(true) {
    while (root && !root.hasSet) { // 节点存在且未曾记录
      stack.push(root) // 入栈
      root = root.left // 一直向左，找到最左的节点
    }
    if (!stack.length) break // 栈空即终止
    root = stack.pop() // 出栈
    arr.push(root.val) // 记录数据
    root.hasSet = true // 节点已被记录
    if (root.right) {root = root.right} // 当前所有左节点已记录，如果有右节点，前往当前的右节点
  }
  return arr
  // 时间 O(n)
  // 空间 O(n)
};
//leetcode submit region end(Prohibit modification and deletion)
