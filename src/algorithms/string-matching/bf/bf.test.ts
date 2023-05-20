import { bfMatch, bfMatch2 } from './bf'

describe('Brute Force', () => {
  describe('bfMatch', () => {
    it('matching success', () => {
      expect(bfMatch('abcdefabce', 'abce')).toBe(6)
    })
    it('matching fail', () => {
      expect(bfMatch('abcdefabce', 'abcf')).toBe(-1)
    })
    it('empty string matching success in the index 0', () => {
      expect(bfMatch('abcdefabce', '')).toBe(0)
    })
  })

  describe('bfMatch2', () => {
    it('matching success', () => {
      expect(bfMatch2('abcdefabce', 'abce')).toBe(6)
    })
    it('matching fail', () => {
      expect(bfMatch2('abcdefabce', 'abcf')).toBe(-1)
    })
    it('empty string matching success in the index 0', () => {
      expect(bfMatch2('abcdefabce', '')).toBe(0)
    })
  })
})
