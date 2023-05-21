/**
 * @description 一次可以爬 1 或 2 个台阶，问有多少种不同的方法可以爬到楼顶
 * @param n 楼梯阶数
 * @returns 不同的方法数
 */
export function climbStairs(n: number): number {
  if (n <= 2) return n
  // 显然的是，爬到n阶要么是由第n-2阶爬2阶上来，要么是由第n-1阶爬1阶上来
  // 设p[n]表示爬n阶的方法，那么p[n] = p[n-1] + p[n-2]
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
