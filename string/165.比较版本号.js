/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const ver1 = version1.split(".").map(i => parseInt(i));
  const ver2 = version2.split(".").map(i => parseInt(i));

  while (ver1[ver1.length - 1] == 0) {
    ver1.pop();
  }
  while (ver2[ver2.length - 1] == 0) {
    ver2.pop();
  }

  while (ver1.length && ver2.length) {
    if (ver1[0] > ver2[0]) {
      return 1;
    } else if (ver1[0] < ver2[0]) {
      return -1;
    }
    ver1.shift();
    ver2.shift();
  }
  if (ver1.length) {
    return 1;
  }
  if (ver2.length) {
    return -1;
  }
  return 0;
  // T: O(n + m)
  // S: O(n + m)
};
// @lc code=end
