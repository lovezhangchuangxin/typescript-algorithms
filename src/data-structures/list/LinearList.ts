/**
 * 线性表抽象类
 */
export default abstract class LinearList<T> {
  /**
   * 返回 L 的长度。
   */
  public abstract size(): number
  /**
   * 判断 L 是否为空。
   */
  public abstract isEmpty(): boolean
  /**
   * 清空 L。
   */
  public abstract clear(): void
  /**
   * 获取 L 中第 index 个元素。
   */
  public abstract get(index: number): T
  /**
   * 在 L 中查找与 element 满足某函数的元素。
   */
  public abstract find(fn: (element: T, index: number) => boolean): T | null
  /**
   * 在 L中查找 element 的位置。
   */
  public abstract indexOf(element: T): number
  /**
   * 在 L 中查找满足某函数的元素的位置。
   */
  public abstract findIndex(fn: (element: T, index: number) => boolean): number
  /**
   * 在线性表的第 index 个位置插入新元素 element。
   */
  public abstract insert(index: number, element: T): LinearList<T>
  /**
   * 删除线性表中第 index 个位置的元素，并返回该元素。
   */
  public abstract remove(index: number): T
  /**
   * 遍历线性表，对每个元素执行 fn 函数。返回 false 时停止遍历。
   */
  public abstract forEach(fn: (element: T, index: number) => boolean): void
  /**
   * 返回元素 element 的前驱元素。
   */
  public abstract prev(element: T): T | null
  /**
   * 返回元素 element 的后继元素。
   */
  public abstract next(element: T): T | null
  /**
   * 将链表转换为数组。
   */
  public abstract toArray(): T[]
  /**
   * 返回线性表的字符串形式。
   */
  public abstract toString(): string
}
