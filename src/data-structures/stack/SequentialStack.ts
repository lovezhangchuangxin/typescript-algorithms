import Stack from './Stack'

/**
 * 顺序栈，使用数组实现
 */
export default class SequentialStack<T> implements Stack<T> {
  protected arr: T[] = []

  constructor(elements?: T[]) {
    if (elements) {
      elements.forEach((ele) => this.push(ele))
    }
  }

  /**
   * 返回 S 的长度。O(1)
   */
  public size(): number {
    return this.arr.length
  }

  /**
   * 判断 S 是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * 清空 S。O(1)
   */
  public clear(): void {
    this.arr = []
  }

  /**
   * 将元素 element 入栈。O(1)
   * @param element 入栈的元素
   */
  public push(element: T): SequentialStack<T> {
    this.arr.push(element)
    return this
  }

  /**
   * 出栈。O(1)
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.arr.pop() as T
  }

  /**
   * 获取栈顶元素。O(1)
   */
  public peak(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.arr[this.size() - 1]
  }

  /**
   * 将栈转换为数组。O(n)
   */
  public toArray(): T[] {
    return [...this.arr]
  }

  /**
   * 返回栈的字符串形式。O(n)
   */
  public toString(): string {
    return this.arr.toString()
  }
}
