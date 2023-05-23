/**
 * 栈抽象类
 */
export default abstract class Stack<T> {
  /**
   * 返回 S 的长度。
   */
  public abstract size(): number
  /**
   * 判断 S 是否为空。
   */
  public abstract isEmpty(): boolean
  /**
   * 清空 S。
   */
  public abstract clear(): void
  /**
   * 将元素 element 入栈。
   */
  public abstract push(element: T): Stack<T>
  /**
   * 出栈。
   */
  public abstract pop(): T
  /**
   * 获取栈顶元素。
   */
  public abstract peak(): T
  /**
   * 将栈转换为数组。
   */
  public abstract toArray(): T[]
  /**
   * 返回栈的字符串形式。
   */
  public abstract toString(): string
}
