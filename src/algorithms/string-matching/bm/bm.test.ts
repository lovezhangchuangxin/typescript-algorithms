import { bmMatch } from './bm'

describe('Boyer-Moore', () => {
  it('matching success', () => {
    expect(bmMatch('abcdefabce', 'abce')).toBe(6)
  })
  it('matching fail', () => {
    expect(bmMatch('abcdefabce', 'abcf')).toBe(-1)
  })
  it('empty string matching success in the index 0', () => {
    expect(bmMatch('abcdefabce', '')).toBe(0)
  })
})
