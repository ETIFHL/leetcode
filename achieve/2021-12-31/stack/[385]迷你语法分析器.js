//给定一个用字符串表示的整数的嵌套列表，实现一个解析它的语法分析器。
//
// 列表中的每个元素只可能是整数或整数嵌套列表
//
// 提示：你可以假定这些字符串都是格式良好的：
//
//
// 字符串非空
// 字符串不包含空格
// 字符串只包含数字0-9、[、-、,、]
//
//
//
//
// 示例 1：
//
// 给定 s = "324",
//
//你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
//
//
// 示例 2：
//
// 给定 s = "[123,[456,[789]]]",
//
//返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
//
//1. 一个 integer 包含值 123
//2. 一个包含两个元素的嵌套列表：
//    i.  一个 integer 包含值 456
//    ii. 一个包含一个元素的嵌套列表
//         a. 一个 integer 包含值 789
//
// Related Topics 栈 字符串

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  const stack = []
  let current = new NestedInteger() // 当前操作的节点，根节点做一个列表，返回时返回第一位即可
  let temp = '' // 数字暂存
  function generatorNum() {
    if (temp) { // temp有内容的时候才处理，前一个字符可能是']'
      current.add(new NestedInteger(temp - 0)) // 数字计入
      temp = ''
    }
  }

  for (let i of s) {
    switch ( i ) {
      case '[':
        let nestNode = new NestedInteger()  // 左括号，创建一个新的节点
        current.add(nestNode) // 加入作为子节点当前列表
        stack.push(current) // 入栈
        current = nestNode // 当前节点切换
        break
      case ']':
        generatorNum() // 处理一下当前可能存在的数字
        current = stack.pop() // 括号内的处理完成，切换为前一个节点处理
        break
      case '-':
        temp += i // 负数起始
        break
      case ',': // 逗号说明前一个内容已完
        generatorNum()
        break
      default: // 数字，计入数字暂存
        temp += i
    }
  }
  if (temp) { // 数字做结尾的时候处理遗留问题
    generatorNum()
  }
  return current.getList()[0]
}
//leetcode submit region end(Prohibit modification and deletion)
