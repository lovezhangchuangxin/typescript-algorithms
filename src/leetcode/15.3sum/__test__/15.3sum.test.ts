import { threeSum } from '../15.3sum'

const nums = [-1, 0, 1, 2, -1, -4]
const expected = [
  [-1, -1, 2],
  [-1, 0, 1],
]

const nums2 = [0, 1, 1]

const nums3 = [0, 0, 0]
const expected3 = [[0, 0, 0]]

describe('threeSum', () => {
  it('test case 1', () => {
    const result = threeSum(nums)
    expect(result).toHaveLength(2)
    expect(result.map((arr) => arr.sort((a, b) => a - b))).toEqual(expect.arrayContaining(expected))
  })
  it('test case 2', () => {
    const result = threeSum(nums2)
    expect(result).toHaveLength(0)
  })
  it('test case 2', () => {
    const result = threeSum(nums3)
    expect(result).toHaveLength(1)
    expect(result).toEqual(expected3)
  })
})
