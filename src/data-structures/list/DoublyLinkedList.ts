import LinearList from './LinearList'
import { DoublyLinkedListNode } from './ListNode'
import { SinglyLinkedList } from './SinglyLinkedList'

/**
 * 双向链表
 */
export class DoublyLinkedList<T> extends SinglyLinkedList<T> implements LinearList<T> {
  // 头节点
  protected head: DoublyLinkedListNode<T> | null = null
  // 尾节点
  protected tail: DoublyLinkedListNode<T> | null = null
  // 链表长度
  protected _size = 0

  public constructor(elements?: T[]) {
    super()
    elements?.forEach((ele) => this.push(ele))
  }

  /**
   * 在链表的第 index 个位置插入新元素 element。O(n)
   * @param index
   * @param element
   */
  public insert(index: number, element: T): DoublyLinkedList<T> {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of range')
    }
    const newNode = new DoublyLinkedListNode(element)
    // 插入头部
    if (index === 0) {
      newNode.next = this.head
      if (this.head === null) {
        this.tail = newNode
      } else {
        this.head.prev = newNode
      }
      this.head = newNode
    } else {
      let node = this.head
      for (let i = 0; i < index - 1; i++) {
        node = node!.next
      }
      newNode.next = node!.next
      newNode.prev = node
      node!.next = newNode
      if (newNode.next === null) {
        this.tail = newNode
      } else {
        newNode.next.prev = newNode
      }
    }
    this._size++
    return this
  }

  /**
   * 删除链表中第 index 个元素。O(n)
   */
  public remove(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range')
    }
    let node = this.head
    // 删除头部
    if (index === 0) {
      this.head = this.head!.next
      if (this.head === null) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else {
      for (let i = 0; i < index - 1; i++) {
        node = node!.next
      }
      const prevNode = node
      node = node!.next
      prevNode!.next = node!.next
      if (prevNode!.next === null) {
        this.tail = prevNode
      } else {
        prevNode!.next.prev = prevNode
      }
    }
    this._size--
    return node!.value
  }
}
