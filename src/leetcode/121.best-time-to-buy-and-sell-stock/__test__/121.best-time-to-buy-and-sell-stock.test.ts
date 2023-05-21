import { maxProfit } from '../121.best-time-to-buy-and-sell-stock'

describe('maxProfit', () => {
  it('test case 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })
  it('test case 2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
