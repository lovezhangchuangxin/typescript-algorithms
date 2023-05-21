/**
 * 中心扩展法
 */
export function longestPalindrome(s: string): string {
  let start = 0,
    end = 0,
    len
  for (let i = 0; i < s.length; i++) {
    const oddLen = palindrome(s, i, i)
    const evenLen = palindrome(s, i, i + 1)
    len = Math.max(oddLen, evenLen)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.slice(start, end + 1)
}

function palindrome(s: string, left: number, right: number): number {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}

/**
 * 动态规范法
 * p(i,j) = p(i+1,j-1) && s[i] === s[j]
 */
export function longestPalindrome2(s: string): string {
  let start = 0,
    len = 1
  // dp[i][j]表示i到j的字符串是否是回文串
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false))
  // 边界条件，1个或者2个字符串的情况
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
    if (i < s.length - 1 && s[i] == s[i + 1]) {
      dp[i][i + 1] = true
      start = i
      len = 2
    }
  }
  // 注意循环的顺序
  for (let L = 2; L < s.length; L++) {
    for (let i = 0; i < s.length - L; i++) {
      dp[i][i + L] = dp[i + 1][i + L - 1] && s[i] === s[i + L]
      if (dp[i][i + L] && L + 1 > len) {
        start = i
        len = L + 1
      }
    }
  }
  return s.slice(start, start + len)
}
