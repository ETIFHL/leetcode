//给定两个二叉树，编写一个函数来检验它们是否相同。
//
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
//
// 示例 1:
//
// 输入:       1         1
//          / \       / \
//         2   3     2   3
//
//        [1,2,3],   [1,2,3]
//
//输出: true
//
// 示例 2:
//
// 输入:      1          1
//          /           \
//         2             2
//
//        [1,2],     [1,null,2]
//
//输出: false
//
//
// 示例 3:
//
// 输入:       1         1
//          / \       / \
//         2   1     1   2
//
//        [1,2,1],   [1,1,2]
//
//输出: false
//
// Related Topics 树 深度优先搜索
// 👍 462 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // recursive
  // if(p === null && q === null) {
  //   return true
  // }
  // if (p === null && q !== null) {
  //   return false
  // }
  // if (p !== null && q === null) {
  //   return false
  // }
  // if (p.val !== q.val) {
  //   return false
  // }
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  // T:O(n), S:O(1)

  // iteration
  const queue = [[p, q]]
  while (queue.length) {
    let current = queue.shift()
    if(current[0] === null && current[1] === null) {
      continue
    }
    if (current[0] === null && current[1] !== null) {
      return false
    }
    if (current[0] !== null && current[1] === null) {
      return false
    }
    if (current[0].val !== current[1].val) {
      return false
    }
    queue.push([
      current[0].left, current[1].left
    ], [
      current[0].right, current[1].right
    ])
  }
  return true
  // T:O(n), S:O(n)
};
//leetcode submit region end(Prohibit modification and deletion)
