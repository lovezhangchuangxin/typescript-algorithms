/**
 * 抽象栈
 */
export default abstract class Queue<T> {
  /**
   * 返回队列的长度
   */
  public abstract size(): number
  /**
   * 判断队列是否为空
   */
  public abstract isEmpty(): boolean
  /**
   * 清空队列
   */
  public abstract clear(): void
  /**
   * 入队
   * @param element 入队的元素
   */
  public abstract enQueue(element: T): Queue<T>
  /**
   * 出队
   */
  public abstract deQueue(): T
  /**
   * 获取队头元素
   */
  public abstract front(): T
  /**
   * 返回队列的数组形式
   */
  public abstract toArray(): T[]
  /**
   * 返回队列的字符串形式
   */
  public abstract toString(): string
}
