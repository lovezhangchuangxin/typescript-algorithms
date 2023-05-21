import { lengthOfLongestSubstring } from '../3.longest-substring-without-repeating-characters'

describe('lengthOfLongestSubstring', () => {
  it('test case 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })
  it('test case 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })
  it('test case 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})
