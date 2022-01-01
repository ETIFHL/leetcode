//给定一个化学式formula（作为字符串），返回每种原子的数量。
//
// 原子总是以一个大写字母开始，接着跟随0个或任意个小写字母，表示原子的名字。
//
// 如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。例如，H2O 和 H2O2 是可行的，但 H1O2 这个表达是不可行的。
//
//
// 两个化学式连在一起是新的化学式。例如 H2O2He3Mg4 也是化学式。
//
// 一个括号中的化学式和数字（可选择性添加）也是化学式。例如 (H2O2) 和 (H2O2)3 是化学式。
//
// 给定一个化学式，输出所有原子的数量。格式为：第一个（按字典序）原子的名子，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数
//量（如果数量大于 1），以此类推。
//
// 示例 1:
//
//
//输入:
//formula = "H2O"
//输出: "H2O"
//解释:
//原子的数量是 {'H': 2, 'O': 1}。
//
//
// 示例 2:
//
//
//输入:
//formula = "Mg(OH)2"
//输出: "H2MgO2"
//解释:
//原子的数量是 {'H': 2, 'Mg': 1, 'O': 2}。
//
//
// 示例 3:
//
//
//输入:
//formula = "K4(ON(SO3)2)2"
//输出: "K4N2O14S4"
//解释:
//原子的数量是 {'K': 4, 'N': 2, 'O': 14, 'S': 4}。
//
//
// 注意:
//
//
// 所有原子的第一个字母为大写，剩余字母都是小写。
// formula的长度在[1, 1000]之间。
// formula只包含字母、数字和圆括号，并且题目中给定的是合法的化学式。
//
// Related Topics 栈 递归 哈希表

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  const stack = []
  for (let i = 0; i < formula.length; ++i) {
    let s = formula[i]
    if (isNaN(Number(s))) { // 字符
      if (s <= 'z' && s >= 'a') { // 小写字符
        stack[stack.length - 1][0] += s // 拼接
      } else { // 大写字符，直接入栈
        stack.push([s, ''])
      }
    } else { // 数字，
      if (stack[stack.length - 1][0] === ')') { // 有一个括号，消去
        let n = s // 可能是多位数，读一下后几位
        while (formula[i + 1] && !isNaN(Number(formula[i + 1]))) {
          i++
          n += formula[i]
        }
        stack.pop() // 去掉右括号
        const temp = [] // 暂时出栈的元素记录
        while (stack[stack.length - 1][0] !== '(') { // 到前一个左括号前的元素出现次数都乘以倍数
          if (!stack[stack.length - 1][1]) {
            stack[stack.length - 1][1] = 1
          }
          stack[stack.length - 1][1] *= parseInt(n) // 数量乘以倍数
          temp.push(stack.pop())
        }
        stack.pop() // 左括号出栈
        while (temp.length) { // 处理完成，压回栈中
          stack.push(temp.pop())
        }
      } else {
        stack[stack.length - 1][1] += s // 非括号，直接数字加一下
      }
    }
  }
  const obj = {}
  while (stack.length) { // 哈希表记录一下各个元素出现的次数
    let item = stack.pop()
    item[1] = parseInt(item[1] ? item[1] : 1)
    if (obj[item[0]]) {
      obj[item[0]] += item[1]
    } else {
      obj[item[0]] = item[1]
    }
  }
  let str = '' // 排序一下拼成字符串
  Object.keys(obj).sort((a, b) => a > b ? 1 : -1).forEach(i => {
    str = str + i + (obj[i] === 1 ? '' : obj[i])
  })
  return str
}
//leetcode submit region end(Prohibit modification and deletion)
