import { addTwoNumbers } from '../2.add-two-numbers'
import { ListNode } from '../types'

/**
 * 构建链表
 */
function createList(arr: number[]) {
  const head = new ListNode()
  let cur = head
  for (let i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i])
    cur = cur.next
  }
  return head.next
}

const list1 = createList([2, 4, 3])
const list2 = createList([5, 6, 4])
const list3 = createList([0])
const list4 = createList([0])
const list5 = createList([9, 9, 9, 9, 9, 9, 9])
const list6 = createList([9, 9, 9, 9])

describe('addTwoNumbers', () => {
  it('test case 1', () => {
    const result = addTwoNumbers(list1, list2)
    expect(result).toEqual(createList([7, 0, 8]))
  })
  it('test case 2', () => {
    const result = addTwoNumbers(list3, list4)
    expect(result).toEqual(createList([0]))
  })
  it('test case 3', () => {
    const result = addTwoNumbers(list5, list6)
    expect(result).toEqual(createList([8, 9, 9, 9, 0, 0, 0, 1]))
  })
})
