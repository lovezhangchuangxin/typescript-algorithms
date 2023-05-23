import { reverse } from '../7.reverse-integer'

describe('reverse', () => {
  it('test case 1', () => {
    expect(reverse(123)).toBe(321)
  })

  it('test case 2', () => {
    expect(reverse(-123)).toBe(-321)
  })

  it('test case 3', () => {
    expect(reverse(120)).toBe(21)
  })

  it('test case 4', () => {
    expect(reverse(0)).toBe(0)
  })

  it('test case 5', () => {
    expect(reverse(1534236469)).toBe(0)
  })
})
