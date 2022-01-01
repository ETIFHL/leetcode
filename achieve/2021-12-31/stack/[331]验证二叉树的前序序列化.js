//序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。
//
//      _9_
//    /   \
//   3     2
//  / \   / \
// 4   1  #  6
/// \ / \   / \
//# # # #   # #
//
//
// 例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。
//
// 给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。
//
// 每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。
//
// 你可以认为输入格式总是有效的，例如它永远不会包含两个连续的逗号，比如 "1,,3" 。
//
// 示例 1:
//
// 输入: "9,3,4,#,#,1,#,#,2,#,6,#,#"
//输出: true
//
// 示例 2:
//
// 输入: "1,#"
//输出: false
//
//
// 示例 3:
//
// 输入: "9,#,#,1"
//输出: false
// Related Topics 栈

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(',')
  const stack = []
  const len = arr.length
  let i = 0
  while (i < len) {
    if (arr[i] === '#') { // 到了叶节点
      while (stack[stack.length - 1] === '#') {
        stack.pop() // 前一个节点也是叶节点，出栈
        stack.pop() // 当前子树的根遍历完成，也可出栈
      }
      if (stack.length) { // 检查栈内是否还有元素
        stack.push('#') // 入栈，表示当前左子树已出栈
      } else {
        return i === len - 1 // 栈内无元素了，看是否遍历完成
      }
    } else {
      stack.push(arr[i]) // 普通元素，正常入栈
    }
    i++
  }
  return stack.length === 0 // 最后应该为空栈
}
//leetcode submit region end(Prohibit modification and deletion)
