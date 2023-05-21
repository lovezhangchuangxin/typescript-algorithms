import { longestPalindrome, longestPalindrome2 } from '../5.longest-palindromic-substring'

describe('longest-palindromic-substring', () => {
  describe('center expansion', () => {
    it('test case 1', () => {
      const result = longestPalindrome('babad')
      // 可能是 'bab' 或 'aba'
      expect(result === 'bab' || result === 'aba').toBeTruthy()
    })
    it('test case 2', () => {
      expect(longestPalindrome('cbbd')).toBe('bb')
    })
    it('test case 3', () => {
      expect(longestPalindrome('aaaaa')).toBe('aaaaa')
    })
  })
  describe('dynamic programming', () => {
    it('test case 1', () => {
      const result = longestPalindrome2('babad')
      // 可能是 'bab' 或 'aba'
      expect(result === 'bab' || result === 'aba').toBeTruthy()
    })
    it('test case 2', () => {
      expect(longestPalindrome2('cbbd')).toBe('bb')
    })
    it('test case 3', () => {
      expect(longestPalindrome2('aaaaa')).toBe('aaaaa')
    })
  })
})
