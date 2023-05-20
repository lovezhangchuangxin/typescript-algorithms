import { twoSum } from '../1.two-sum'

describe('two-sum', () => {
  it('simple test', () => {
    const result = twoSum([2, 7, 11, 15], 9)
    expect(result).toHaveLength(2)
    expect(result).toContain(0)
    expect(result).toContain(1)
  })
  it('simple test2', () => {
    const result = twoSum([3, 3], 6)
    expect(result).toHaveLength(2)
    expect(result).toContain(0)
    expect(result).toContain(1)
  })
})
