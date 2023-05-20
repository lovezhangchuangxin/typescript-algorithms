export function lengthOfLongestSubstring(s: string): number {
  let max = 0
  const map = new Map<string, number>()
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j])! + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  return max
}
