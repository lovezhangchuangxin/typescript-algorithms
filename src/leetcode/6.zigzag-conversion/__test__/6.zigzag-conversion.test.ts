import { convert, convert2 } from '../6.zigzag-conversion'

describe('convert', () => {
  describe('function 1', () => {
    it('test case 1', () => {
      expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    })
    it('test case 2', () => {
      expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    })
    it('test case 3', () => {
      expect(convert('A', 1)).toBe('A')
    })
  })
  describe('function 2', () => {
    it('test case 1', () => {
      expect(convert2('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    })
    it('test case 2', () => {
      expect(convert2('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    })
    it('test case 3', () => {
      expect(convert2('A', 1)).toBe('A')
    })
  })
})
