import { findMedianSortedArrays } from '../4.median-of-two-sorted-arrays'

describe('findMedianSortedArrays', () => {
  it('test case 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBeCloseTo(2)
  })
  it('test case 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBeCloseTo(2.5)
  })
  it('test case 3', () => {
    expect(findMedianSortedArrays([1], [4])).toBeCloseTo(2.5)
  })
  it('test case 4', () => {
    expect(findMedianSortedArrays([], [1])).toBeCloseTo(1)
  })
  it('test case 5', () => {
    expect(findMedianSortedArrays([1], [])).toBeCloseTo(1)
  })
  it('test case 6', () => {
    expect(findMedianSortedArrays([], [2, 3])).toBeCloseTo(2.5)
  })
})
