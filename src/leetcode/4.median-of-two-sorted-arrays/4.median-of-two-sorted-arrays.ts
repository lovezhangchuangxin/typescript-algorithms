export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const midIndex = Math.floor((nums1.length + nums2.length + 1) / 2),
    odd = (nums1.length + nums2.length) % 2 === 1
  let p1 = 0,
    p2 = 0,
    index = 0,
    lastNum = nums1.concat(nums2)[0]
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      if (midIndex === index++) {
        if (odd) {
          return lastNum
        }
        return (lastNum + nums1[p1]) / 2
      } else {
        lastNum = nums1[p1]
        p1++
      }
    } else {
      if (midIndex === index++) {
        if (odd) {
          return lastNum
        }
        return (lastNum + nums2[p2]) / 2
      } else {
        lastNum = nums2[p2]
        p2++
      }
    }
  }
  while (p1 < nums1.length) {
    if (midIndex === index++) {
      if (odd) {
        return lastNum
      }
      return (lastNum + nums1[p1]) / 2
    }
    lastNum = nums1[p1]
    p1++
  }
  while (p2 < nums2.length) {
    if (midIndex === index++) {
      if (odd) {
        return lastNum
      }
      return (lastNum + nums2[p2]) / 2
    }
    lastNum = nums2[p2]
    p2++
  }
  return lastNum
}
