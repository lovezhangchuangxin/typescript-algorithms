/**
 * 三数之和，排序加双指针
 */
export function threeSum(nums: number[]): number[][] {
  // 兜底
  if (nums?.length < 3) return []
  const result: number[][] = []
  let j = 0,
    k = 0,
    sum = 0
  // 先排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前值大于0，那么后面的值肯定大于0，不可能相加为0
    if (nums[i] > 0) break
    // 如果当前值和前一个值相等，那么跳过，避免重复
    if (i > 0 && nums[i] === nums[i - 1]) continue
    j = i + 1
    k = nums.length - 1
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]])
        // 跳过重复值
        while (nums[j] === nums[j + 1] && j < k) {
          j++
        }
        while (nums[k] === nums[k - 1] && j < k) {
          k--
        }
        j++
        k--
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }
  return result
}
