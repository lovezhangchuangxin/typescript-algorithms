/**
 * 排序测试器
 */
export default class SortTester {
  /**
   * 比较函数
   * @param a 参数a
   * @param b 参数b
   * @returns a > b 返回 1，a < b 返回 -1，a === b 返回 0
   */
  public static defaultCompareFn<T>(a: T, b: T): number {
    if (a === b) return 0
    return a > b ? 1 : -1
  }

  /**
   * 测试数组
   */
  public static testArrs = [[], [1], [1, 2], [5, 4, 3, 2, 1], [3, 7, 8, 5, 2, 1, 9, 5, 4]]

  /**
   * 验证排序结果
   */
  public static testSort(sortFn: <T>(arr: T[], compareFn?: (a: T, b: T) => number) => T[]) {
    SortTester.testArrs.forEach((arr) => {
      const sortedArr = sortFn(arr, SortTester.defaultCompareFn)
      expect(sortedArr.length).toBe(arr.length)
      expect(sortedArr).toEqual(Array.prototype.sort.call(arr, SortTester.defaultCompareFn))
    })
  }
}
