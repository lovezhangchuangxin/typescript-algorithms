/**
 * @description 两数之和(two-sum)
 * @see https://leetcode.cn/problems/two-sum/
 */

/**
 * @param nums 数组
 * @param target 目标值
 * @returns 两数下标
 */
export function twoSum(nums: number[], target: number): number[] {
  const numsSet = new Set(nums)
  for (let index = 0; index < nums.length; index++) {
    const otherNum = target - nums[index]
    if (numsSet.has(otherNum)) {
      const otherIndex = nums.lastIndexOf(otherNum)
      if (index !== otherIndex) {
        return [index, otherIndex]
      }
    }
  }
  return []
}
