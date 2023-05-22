/**
 * 单链表节点
 */
export class SingleLinkedListNode<T> {
  public value: T
  public next: SingleLinkedListNode<T> | null = null

  public constructor(value: T, next: SingleLinkedListNode<T> | null = null) {
    this.value = value
    this.next = next
  }
}
