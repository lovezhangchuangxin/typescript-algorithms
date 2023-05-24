import AbstractSet from './AbstractSet'

/**
 * 自定义集合，因为ES6中已经有Set了，所以这里命名为CustomSet
 */
export default class CustomSet<T extends string | number | symbol> implements AbstractSet<T> {
  protected elements: Record<T, T> = Object.create(null)
  protected _size = 0

  constructor(elements?: T[]) {
    if (elements) {
      elements.forEach((ele) => this.add(ele))
    }
  }

  /**
   * 返回集合的长度。O(1)
   */
  public size(): number {
    return this._size
  }

  /**
   * 判断集合是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * 清空集合。O(1)
   */
  public clear(): void {
    this.elements = Object.create(null)
    this._size = 0
  }

  /**
   * 判断集合是否包含元素 element。O(1)
   * @param element 元素
   */
  public has(element: T): boolean {
    return element in this.elements
  }

  /**
   * 添加元素 element 到集合中。O(1)
   * @param element 元素
   */
  public add(element: T): CustomSet<T> {
    if (!this.has(element)) {
      this.elements[element] = element
      this._size++
    }
    return this
  }

  /**
   * 删除集合中的元素 element。O(1)
   * @param element 元素
   */
  public delete(element: T): boolean {
    if (this.has(element)) {
      delete this.elements[element]
      this._size--
      return true
    }
    return false
  }

  /**
   * 返回集合中所有元素值的数组。O(n)
   */
  public values(): T[] {
    return Object.values(this.elements)
  }
}
