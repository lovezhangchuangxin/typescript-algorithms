/**
 * @description 阿姆斯特朗数
 * 如果一个n位正整数等于其各位数字的n次方之和,则称该数为阿姆斯特朗数。
 */

/**
 * 判断一个数是否为阿姆斯特朗数
 * @param num
 * @returns {boolean}
 */
export function isArmstrongNumber(num: number): boolean {
  // 小数和非正数都不是阿姆斯特朗数
  if (!Number.isInteger(num) || num <= 0) return false
  const digits = num
    .toString()
    .split('')
    .map((s) => Number(s))
  const len = digits.length
  return num === digits.reduce((acc, cur) => acc + cur ** len, 0)
}

/**
 * 找到指定范围内所有的阿姆斯特朗数
 * @param min
 * @param max
 * @returns {number[]}
 */
export function findArmstrongNumbers(min: number, max: number): number[] {
  const armstrongNumbers: number[] = []
  for (let i = min; i <= max; i++) {
    if (isArmstrongNumber(i)) {
      armstrongNumbers.push(i)
    }
  }
  return armstrongNumbers
}
