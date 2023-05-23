import Queue from './Queue'

/**
 * 顺序队列，使用数组实现
 */
export default class SequentialQueue<T> implements Queue<T> {
  protected arr: T[] = []

  constructor(elements?: T[]) {
    if (elements) {
      elements.forEach((ele) => this.enQueue(ele))
    }
  }

  /**
   * 返回队列的长度。O(1)
   */
  public size(): number {
    return this.arr.length
  }

  /**
   * 判断队列是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.arr.length === 0
  }

  /**
   * 清空队列。O(1)
   */
  public clear(): void {
    this.arr = []
  }

  /**
   * 入队。O(1)
   * @param element 入队的元素
   */
  public enQueue(element: T): SequentialQueue<T> {
    this.arr.push(element)
    return this
  }

  /**
   * 出队。O(n)
   */
  public deQueue(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    return this.arr.shift() as T
  }

  /**
   * 获取队头元素。O(1)
   */
  public front(): T {
    if (this.isEmpty()) {
      throw new Error('Queue is empty')
    }
    return this.arr[0]
  }

  /**
   * 返回队列的数组形式。O(n)
   */
  public toArray(): T[] {
    return [...this.arr]
  }

  /**
   * 返回队列的字符串形式。O(n)
   */
  public toString(): string {
    return this.arr.toString()
  }
}
