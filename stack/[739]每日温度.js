//请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
//
//
// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2
//, 1, 1, 0, 0]。

// [4,3,2,1,6,5,4,3]
//
// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
// Related Topics 栈 哈希表


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  if(T.length < 2){
    return [0]
  }
  const res = T.map(i => 0)
  const stack = [T.length - 1] // 维护一个递增的单调栈，记录数据和位置
  for (let i = T.length - 1; i --> 0;) { // 自后向前遍历数组，栈顶为前一个数字的下标
    if (T[i] < T[stack[stack.length - 1]]) { // 当前数字比栈顶对应的数字小，直接入栈即可
      stack.push(i)
      res[i] = 1
    } else { // 当前数字比栈顶记录对应的数字大了
      while (stack.length && T[stack[stack.length - 1]] <= T[i]) { // 出栈到栈顶严格更大或者栈空为止
        stack.pop()
      }
      if (stack.length) { // 栈内还有比当前更大的元素
        res[i] = stack[stack.length - 1] - i // 下标相减获得对应应当前进的步数
      }
      stack.push(i) // 当前的下标入栈
    }
  }
  return res
};
//leetcode submit region end(Prohibit modification and deletion)

