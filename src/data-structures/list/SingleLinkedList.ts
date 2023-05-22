import LinearList from './LinearList'
import { SingleLinkedListNode } from './ListNode'

/**
 * 单链表
 */
export class SingleLinkedList<T> implements LinearList<T> {
  // 头节点
  private head: SingleLinkedListNode<T> | null = null
  // 尾节点
  private tail: SingleLinkedListNode<T> | null = null
  // 链表长度
  private _size = 0

  public constructor(elements?: T[]) {
    elements?.forEach((ele) => this.push(ele))
  }

  /**
   * 返回链表的头节点。O(1)
   */
  public getHead(): SingleLinkedListNode<T> | null {
    return this.head
  }

  /**
   * 返回链表的尾节点。O(1)
   */
  public getTail(): SingleLinkedListNode<T> | null {
    return this.tail
  }

  /**
   * 返回链表的长度。O(1)
   */
  public size(): number {
    return this._size
  }

  /**
   * 判断链表是否为空。O(1)
   */
  public isEmpty(): boolean {
    return this.size() === 0
  }

  /**
   * 清空链表。O(n)
   */
  public clear(): void {
    let node = this.head
    let next: typeof node = null
    while (node !== null) {
      next = node.next
      node.next = null
      node = next
    }
    this.head = null
    this.tail = null
    this._size = 0
  }

  /**
   * 获取链表中第 index 个元素。O(n)
   * @param index 索引
   */
  public get(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range')
    }
    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node!.next
    }
    return node!.value
  }

  /**
   * 查找与 element 满足某函数的元素。O(n)
   */
  public find(fn: (element: T, index: number) => boolean): T | null {
    let node = this.head
    let index = 0
    while (node) {
      if (fn(node.value, index++)) {
        return node.value
      }
      node = node.next
    }
    return null
  }

  /**
   * 在链表中查找 element 的位置。O(n)
   */
  public indexOf(element: T): number {
    let node = this.head
    let index = 0
    while (node) {
      if (node.value === element) {
        return index
      }
      node = node.next
      index++
    }
    return -1
  }

  /**
   * 查找与 element 相等的元素的位置。O(n)
   */
  public findIndex(arg: (element: T, index: number) => boolean): number {
    let node = this.head
    let index = 0
    while (node) {
      if (arg(node.value, index)) {
        return index
      }
      index++
      node = node.next
    }
    return -1
  }

  /**
   * 在链表的第 index 个位置插入新元素 element。O(n)
   */
  public insert(index: number, element: T): SingleLinkedList<T> {
    if (index < 0 || index > this.size()) {
      throw new Error('Index out of range')
    }
    const newNode = new SingleLinkedListNode(element)
    // 插入头部
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      // 如果尾节点为空，说明链表为空，此时尾节点也指向新节点
      if (this.tail === null) {
        this.tail = newNode
      }
    }
    // 插入尾部，此时链表一定非空，头节点和尾节点都有值
    else if (index === this.size()) {
      this.tail!.next = newNode
      this.tail = newNode
    }
    // 插入中间
    else {
      let node = this.head
      for (let i = 0; i < index - 1; i++) {
        node = node!.next
      }
      newNode.next = node!.next
      node!.next = newNode
    }
    this._size++
    return this
  }

  /**
   * 在链表的第一个位置插入新元素 element。O(1)
   */
  public unshift(element: T): SingleLinkedList<T> {
    return this.insert(0, element)
  }

  /**
   * 在链表的最后一个位置插入新元素 element。O(1)
   * 正是得益于尾节点的存在，才使得在链表尾部插入元素的时间复杂度为 O(1)
   */
  public push(element: T): SingleLinkedList<T> {
    return this.insert(this.size(), element)
  }

  /**
   * 删除链表中第 index 个元素。O(n)
   */
  public remove(index: number): T {
    if (index < 0 || index >= this.size()) {
      throw new Error('Index out of range')
    }
    let node = this.head
    let value: T
    // 删除头部
    if (index === 0) {
      value = node!.value
      this.head = node!.next
      // 如果删除后链表为空，则尾节点也为空
      if (this.head === null) {
        this.tail = null
      }
    }
    // 删除尾部
    else if (index === this.size() - 1) {
      for (let i = 0; i < index - 1; i++) {
        node = node!.next
      }
      value = node!.next!.value
      node!.next = null
      this.tail = node
    }
    // 删除中间
    else {
      for (let i = 0; i < index - 1; i++) {
        node = node!.next
      }
      value = node!.next!.value
      node!.next = node!.next!.next
    }
    this._size--
    return value
  }

  /**
   * 删除链表中第一个元素。O(1)
   */
  public shift(): T {
    return this.remove(0)
  }

  /**
   * 删除链表中最后一个元素。O(n)
   */
  public pop(): T {
    return this.remove(this.size() - 1)
  }

  /**
   * 遍历线性表，对每个元素执行 fn 函数。返回 false 时停止遍历。O(n)
   * @param fn 遍历函数
   */
  public forEach(fn: (element: T, index: number) => boolean): void {
    let node = this.head
    let index = 0
    while (node) {
      if (!fn(node.value, index++)) {
        break
      }
      node = node.next
    }
  }

  /**
   * 返回元素 element 的前驱元素。O(n)
   * @param element 元素
   */
  public prev(element: T): T | null {
    let node = this.head
    while (node && node.next) {
      if (node.next.value === element) {
        return node.value
      }
      node = node.next
    }
    return null
  }

  /**
   * 返回元素 element 的后继元素。
   * @param element 元素
   */
  public next(element: T): T | null {
    let node = this.head
    while (node) {
      if (node.value === element) {
        return node.next ? node.next.value : null
      }
      node = node.next
    }
    return null
  }

  /**
   * 将链表转换为数组。O(n)
   */
  public toArray(): T[] {
    const array: T[] = []
    this.forEach((element) => {
      array.push(element)
      return true
    })
    return array
  }

  /**
   * 将链表转换为字符串。O(n)
   */
  public toString(): string {
    return this.toArray().toString()
  }
}
