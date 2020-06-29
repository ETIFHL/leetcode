//给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
//
// 例如：
//给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
//
// 返回锯齿形层次遍历如下：
//
// [
//  [3],
//  [20,9],
//  [15,7]
//]
//
// Related Topics 栈 树 广度优先搜索

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let queue = [[root]] // 队列记录每一层的节点
  let collectStartOnLeft = true // 本层遍历的方向
  let res = []
  while (queue.length) {
    const iter = queue.shift()
    const next = [] // 下一层
    const numArr = [] // 本层的数据
    while (iter.length) {
      let n = iter.pop()
      if (!n) continue
      numArr.push(n.val)
      if (collectStartOnLeft) { // 插入顺序决定左或者右先入
        if (n.left) next.push(n.left)
        if (n.right) next.push(n.right)
      } else {
        if (n.right) next.push(n.right)
        if (n.left) next.push(n.left)
      }
    }
    collectStartOnLeft = !collectStartOnLeft // 下层方向变化
    if (numArr.length) res.push(numArr)
    if (next.length) queue.push(next)
  }
  return res
  // 时间O(n)
  // 空间O(n)
}
//leetcode submit region end(Prohibit modification and deletion)
