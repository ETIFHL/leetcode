/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 * tag: linked-list two-pointers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 最朴素的处理方法, 记录链表的节点, 倒序进行比对.
  // O(m+n)
  // O(m+n)
  /*
  const nodeListA = [];
  const nodeListB = [];
  while (headA) {
    nodeListA.unshift(headA);
    headA = headA.next;
  }
  while (headB) {
    nodeListB.unshift(headB);
    headB = headB.next;
  }
  let compareFlag = null;
  for (let i = 0; i < nodeListA.length; ++i) {
    if (nodeListA[i] === nodeListB[i]) {
      compareFlag = nodeListA[i];
    } else {
      break;
    }
  }
  return compareFlag;
  */

  // 稍微优化一下, 只用存储一个链表的节点, 另一个进行比对.
  // O(m+n)
  // O(n)
  /*
  const nodeSet = new Set();
  while (headA) {
    nodeSet.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (nodeSet.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
  */

  // 看了看题解, 双指针跑圈.
  // O(m+n)
  // O(1)
  if (!headA || !headB) {
    // head 为 null, 当然没相交
    return null;
  }
  let hA = headA;
  let hB = headB;
  // 跑圈
  // 设 c 为相交的部分
  // 等长时, 相交则直接找到, 未相交则最后返回 null
  // 不存在交点时, a.len + b.len === b.len + a.len, 最终都跑到 null
  // 存在交点时, (a) + (b - c) = (b) + (a - c), 既在交点重合.
  //           第一圈   第二圈
  while (hA != hB) {
    hA = hA === null ? headB : hA.next;
    hB = hB === null ? headB : hB.next;
  }
  return hA;
};
// @lc code=end
