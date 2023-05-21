import { isPalindrome, isPalindrome2 } from '../9.palindrome-number'

describe('isPalindrome', () => {
  describe('function 1', () => {
    it('test case 1', () => {
      expect(isPalindrome(121)).toBeTruthy()
    })
    it('test case 2', () => {
      expect(isPalindrome(-121)).toBeFalsy()
    })
    it('test case 3', () => {
      expect(isPalindrome(10)).toBeFalsy()
    })
    it('test case 4', () => {
      expect(isPalindrome(0)).toBeTruthy()
    })
  })
  describe('function 2', () => {
    it('test case 1', () => {
      expect(isPalindrome2(121)).toBeTruthy()
    })
    it('test case 2', () => {
      expect(isPalindrome2(-121)).toBeFalsy()
    })
    it('test case 3', () => {
      expect(isPalindrome2(10)).toBeFalsy()
    })
    it('test case 4', () => {
      expect(isPalindrome2(0)).toBeTruthy()
    })
  })
})
