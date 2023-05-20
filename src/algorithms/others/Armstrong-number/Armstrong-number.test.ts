import { findArmstrongNumbers, isArmstrongNumber } from './Armstrong-number'

describe('Armstrong number', () => {
  describe('test isArmstrongNumber function', () => {
    it('"a" is a Armstrong number', () => {
      expect(isArmstrongNumber(0)).toBeFalsy()
    })
    it('0 is not a Armstrong number', () => {
      expect(isArmstrongNumber(0)).toBeFalsy()
    })
    it('1 is a Armstrong number', () => {
      expect(isArmstrongNumber(1)).toBeTruthy()
    })
    it('153 is a Armstrong number', () => {
      expect(isArmstrongNumber(153)).toBeTruthy()
    })
    it('154 is not a Armstrong number', () => {
      expect(isArmstrongNumber(154)).toBeFalsy()
    })
  })
  describe('test findArmstrongNumbers function', () => {
    it('isArmstrongNumber(100, 0)', () => {
      expect(findArmstrongNumbers(100, 0)).toEqual([])
    })
    // 是否允许字符串呢？
    it('isArmstrongNumber(0, "123")', () => {
      expect(findArmstrongNumbers(0, '123' as unknown as number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it('isArmstrongNumber(0, 200)', () => {
      expect(findArmstrongNumbers(1, 200)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 153])
    })
    it('isArmstrongNumber(0, 1000)', () => {
      expect(findArmstrongNumbers(1, 1000)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407])
    })
  })
})
