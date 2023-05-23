/**
 * 单链表节点
 */
export class SinglyLinkedListNode<T> {
  public value: T
  public next: SinglyLinkedListNode<T> | null = null

  public constructor(value: T, next: SinglyLinkedListNode<T> | null = null) {
    this.value = value
    this.next = next
  }
}

/**
 * 双向链表节点
 */
export class DoublyLinkedListNode<T> extends SinglyLinkedListNode<T> {
  public prev: DoublyLinkedListNode<T> | null = null
  public next: DoublyLinkedListNode<T> | null = null

  public constructor(
    value: T,
    next: DoublyLinkedListNode<T> | null = null,
    prev: DoublyLinkedListNode<T> | null = null,
  ) {
    super(value, next)
    this.prev = prev
  }
}
