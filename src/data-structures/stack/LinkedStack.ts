import { SingleLinkedList } from '../list/SingleLinkedList'
import Stack from './Stack'

/**
 * 链栈，使用单链表实现
 */
export default class LinkedStack<T> implements Stack<T> {
  protected list: SingleLinkedList<T> = new SingleLinkedList<T>()

  constructor(elements?: T[]) {
    if (elements) {
      elements.forEach((ele) => this.push(ele))
    }
  }

  /**
   * 返回 S 的长度。O(1)
   */
  public size(): number {
    return this.list.size()
  }

  /**
   * 判断 S 是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.list.isEmpty()
  }

  /**
   * 清空 S。O(1)
   */
  public clear(): void {
    this.list.clear()
  }

  /**
   * 将元素 element 入栈。O(1)
   * @param element 入栈的元素
   */
  public push(element: T): LinkedStack<T> {
    this.list.push(element)
    return this
  }

  /**
   * 出栈。O(1)
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.list.pop()
  }

  /**
   * 获取栈顶元素。O(1)
   */
  public peak(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.list.getTail()!.value
  }

  /**
   * 将栈转换为数组。O(n)
   */
  public toArray(): T[] {
    return this.list.toArray()
  }

  /**
   * 返回栈的字符串形式。O(n)
   */
  public toString(): string {
    return this.list.toString()
  }
}
