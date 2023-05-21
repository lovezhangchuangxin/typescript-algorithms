export function maxProfit(prices: number[]): number {
  // 记录最小价格和最大利润
  let minPrice = prices[0],
    profit = 0
  prices.forEach((price) => {
    // 当天卖出的最大利润 = 当天价格 - 之前的最小价格
    profit = Math.max(profit, price - minPrice)
    // 更新最小价格
    minPrice = Math.min(minPrice, price)
  })
  return profit
}
