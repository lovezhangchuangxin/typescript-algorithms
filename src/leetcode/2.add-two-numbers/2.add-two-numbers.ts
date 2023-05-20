/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from './types'

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry, sum, remainder, p
  const head = new ListNode()
  carry = 0
  p = head
  while (l1 || l2) {
    sum = (l1?.val || 0) + (l2?.val || 0) + carry
    remainder = sum % 10
    carry = Math.floor(sum / 10)
    p.next = new ListNode(remainder)
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    p = p.next
  }
  if (carry) {
    p.next = new ListNode(carry)
  }
  return head.next
}
