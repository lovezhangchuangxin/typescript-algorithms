import SortTester from '../sort-tester'

/**
 * 选择排序算法
 * @param arr 待排序数组
 * @param compareFn 比较函数
 */
export default function selectionSort<T>(arr: T[], compareFn = SortTester.defaultCompareFn<T>): T[] {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i; j < len; j++) {
      if (compareFn(arr[j], arr[minIndex]) < 0) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
