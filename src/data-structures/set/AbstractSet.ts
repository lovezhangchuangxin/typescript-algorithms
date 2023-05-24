/**
 * 集合抽象类
 */
export default abstract class AbstractSet<T> {
  /**
   * 返回集合的长度。
   */
  public abstract size(): number
  /**
   * 判断集合是否为空。
   */
  public abstract isEmpty(): boolean
  /**
   * 清空集合。
   */
  public abstract clear(): void
  /**
   * 判断集合是否包含元素 element。
   */
  public abstract has(element: T): boolean
  /**
   * 将元素 element 添加到集合中。
   */
  public abstract add(element: T): AbstractSet<T>
  /**
   * 将元素 element 从集合中删除。
   */
  public abstract delete(element: T): boolean
  /**
   * 返回集合中所有元素值的数组。
   */
  public abstract values(): T[]
  /**
   * 返回集合 A 和 B 的并集。
   */
  public abstract union(otherSet: AbstractSet<T>): AbstractSet<T>
  /**
   * 返回集合 A 和 B 的交集。
   */
  public abstract intersection(otherSet: AbstractSet<T>): AbstractSet<T>
  /**
   * 返回集合 A 和 B 的差集。
   */
  public abstract difference(otherSet: AbstractSet<T>): AbstractSet<T>
  /**
   * 判断集合 A 是否是集合 B 的子集。
   */
  public abstract isSubsetOf(otherSet: AbstractSet<T>): boolean
  /**
   * 返回集合中所有元素值的字符串。
   */
  public abstract toString(): string
}
