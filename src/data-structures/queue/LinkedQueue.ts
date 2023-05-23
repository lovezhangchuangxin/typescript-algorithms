import { SingleLinkedList } from '../list/SingleLinkedList'
import Queue from './Queue'

/**
 * 链式队列，使用单链表实现
 */
export default class LinkedQueue<T> implements Queue<T> {
  protected list: SingleLinkedList<T> = new SingleLinkedList<T>()

  constructor(elements?: T[]) {
    if (elements) {
      elements.forEach((ele) => this.enQueue(ele))
    }
  }

  /**
   * 返回队列的长度。O(1)
   */
  public size(): number {
    return this.list.size()
  }

  /**
   * 判断队列是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.list.isEmpty()
  }

  /**
   * 清空队列。O(1)
   */
  public clear(): void {
    this.list = new SingleLinkedList<T>()
  }

  /**
   * 入队。O(1)
   * @param element 入队的元素
   */
  public enQueue(element: T): LinkedQueue<T> {
    this.list.push(element)
    return this
  }

  /**
   * 出队。O(1)
   */
  public deQueue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    return this.list.shift() as T
  }

  /**
   * 获取队头元素。O(1)
   */
  public front(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    return this.list.getHead()!.value
  }

  /**
   * 返回队列的数组形式。O(n)
   */
  public toArray(): T[] {
    return this.list.toArray()
  }

  /**
   * 返回队列的字符串形式。O(n)
   */
  public toString(): string {
    return this.list.toString()
  }
}
