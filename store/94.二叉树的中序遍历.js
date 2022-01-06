/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Easy (75.56%)
 * Likes:    1228
 * Dislikes: 0
 * Total Accepted:    646.5K
 * Total Submissions: 855.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 5：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100
 *
 *
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 中序: 左->中->右
  // recursive
  // if (!root) {
  //   return [];
  // }
  // const res = [];
  // function recursive(root) {
  //   if (root.left) recursive(root.left);
  //   res.push(root.val);
  //   if (root.right) recursive(root.right);
  // }
  // recursive(root);
  // return res;

  // iteration
  // 用栈来重现递归过程.
  if (!root) {
    return [];
  }
  const res = [];
  const stack = [];
  let current = root;
  while (stack.length || current) {
    while (current) { // 中序, 先到最左边, 路径全部入栈
      stack.push(current);
      current = current.left;
    }
    // 到最左了,  此时 current 为 null, 取出栈顶的最左节点
    let node = stack.pop();
    res.push(node.val);
    current = node.right; // 当前可能存在的右节点
  }
  return res;
};
// @lc code=end
