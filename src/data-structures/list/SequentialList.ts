import LinearList from './LinearList'

/**
 * 顺序表，仅仅是为了体现线性表的顺序存储结构，实际上不如直接使用数组。
 */
export class SequentialList<T> implements LinearList<T> {
  public arr: T[] = []

  constructor(elements?: T[]) {
    if (elements) {
      this.arr = [...elements]
    }
  }

  /**
   * 返回顺序表的长度。O(1)
   */
  public size(): number {
    return this.arr.length
  }

  /**
   * 判断顺序表是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * 清空顺序表。O(1)
   */
  public clear(): void {
    this.arr = []
  }

  /**
   * 获取顺序表中第 index 个元素。O(1)
   * @param index 索引
   */
  public get(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range')
    }
    return this.arr[index]
  }

  /**
   * 在顺序表中查找与 element 满足某函数的元素。O(n)
   * @param fn 函数
   */
  public find(fn: (element: T, index: number) => boolean): T | null {
    for (let i = 0; i < this.size(); i++) {
      if (fn(this.arr[i], i)) {
        return this.arr[i]
      }
    }
    return null
  }

  /**
   * 在顺序表中查找 element 的位置。O(n)
   * @param element 元素
   */
  public indexOf(element: T): number {
    return this.findIndex((ele) => ele === element)
  }

  /**
   * 在顺序表中查找与 element 满足某函数的元素的位置。O(n)
   * @param fn 函数
   */
  public findIndex(fn: (element: T, index: number) => boolean): number {
    for (let i = 0; i < this.size(); i++) {
      if (fn(this.arr[i], i)) {
        return i
      }
    }
    return -1
  }

  /**
   * 在顺序表的第 index 个位置插入 element。O(n)
   * @param index 索引
   * @param element 元素
   */
  public insert(index: number, element: T): SequentialList<T> {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of range')
    }
    this.arr.splice(index, 0, element)
    return this
  }

  /**
   * 在顺序表的第一个位置插入新元素 element。O(1)
   * @param element 元素
   */
  public unshift(element: T): SequentialList<T> {
    return this.insert(0, element)
  }

  /**
   * 在顺序表的最后一个位置插入新元素 element。O(1)
   */
  public push(element: T): SequentialList<T> {
    return this.insert(this.size(), element)
  }

  /**
   * 在顺序表的第 index 个位置删除元素。O(n)
   * @param index 索引
   */
  public remove(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range')
    }
    return this.arr.splice(index, 1)[0]
  }

  /**
   * 删除顺序表中第一个元素。O(n)
   */
  public shift(): T {
    return this.remove(0)
  }

  /**
   * 删除顺序表中最后一个元素。O(1)
   */
  public pop(): T {
    return this.remove(this.size() - 1)
  }

  /**
   * 遍历线性表，对每个元素执行 fn 函数。返回 false 时停止遍历。O(n)
   * @param fn 遍历函数
   */
  public forEach(fn: (element: T, index: number) => boolean): void {
    for (let i = 0; i < this.size(); i++) {
      if (!fn(this.arr[i], i)) {
        break
      }
    }
  }

  /**
   * 返回元素 element 的前驱元素。O(1)
   * @param element 元素
   */
  public prev(element: T): T | null {
    const index = this.indexOf(element)
    if (index === -1 || index === 0) {
      return null
    }
    return this.get(index - 1)
  }

  /**
   * 返回元素 element 的后继元素。O(1)
   * @param element 元素
   */
  public next(element: T): T | null {
    const index = this.indexOf(element)
    if (index === -1 || index === this.size() - 1) {
      return null
    }
    return this.get(index + 1)
  }

  /**
   * 将顺序表转换为数组。O(1)
   */
  public toArray(): T[] {
    return [...this.arr]
  }

  /**
   * 将顺序表转换为字符串。O(n)
   */
  public toString(): string {
    return this.arr.join(',')
  }
}
