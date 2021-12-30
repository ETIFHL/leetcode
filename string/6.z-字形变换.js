/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }
  const arr = Array.from({length: numRows}).map(i => [])
  let getDown = false
  let currentRow = 0

  for (let i = 0; i < s.length; ++i) {
    arr[currentRow].push(s[i])
    if (currentRow === 0 || currentRow === numRows - 1) getDown = !getDown
    currentRow += getDown ? 1 : -1
  }

  return arr.flat(1).join('')
  // T: O(n)
  // S: O(n)
};
// @lc code=end

