import { kmpMatch } from './kmp'

describe('KMP', () => {
  it('matching success', () => {
    expect(kmpMatch('abcdefabce', 'abce')).toBe(6)
  })
  it('matching fail', () => {
    expect(kmpMatch('abcdefabce', 'abcf')).toBe(-1)
  })
  it('empty string matching success in the index 0', () => {
    expect(kmpMatch('abcdefabce', '')).toBe(0)
  })
})
