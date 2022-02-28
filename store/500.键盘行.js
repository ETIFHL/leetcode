/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (74.45%)
 * Likes:    201
 * Dislikes: 0
 * Total Accepted:    54.9K
 * Total Submissions: 73.8K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 * 
 * 美式键盘 中：
 * 
 * 
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：words = ["omk"]
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * words[i] 由英文字母（小写和大写字母）组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const dict = {
    'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
    'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
    'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3
  }
  return words.filter(word => {
    word = word.toLowerCase()
    let n = 0
    let currentLine = dict[word[n]]
    while (word[++n]) {
      if (dict[word[n]] !== currentLine) {
        return false
      }
    }
    return true
  })
};
// @lc code=end

