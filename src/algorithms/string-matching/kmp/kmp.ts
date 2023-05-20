/**
 * Knuth-Morris-Pratt algorithm
 */

/**
 * @param s 主串
 * @param p 模式串
 * @returns 返回模式串在主串中的索引位置，未找到返回-1
 */
export function kmpMatch(s: string, p: string): number {
  if (s.length < p.length) return -1
  if (p.length <= 0) return 0
  const next = getNext(p)
  let i = 0,
    j = 0
  while (i < s.length && j < p.length) {
    if (j === -1 || s[i] === p[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === p.length) return i - j
  return -1
}

/**
 * @param p 模式串
 * @returns 返回next数组
 */
function getNext(p: string): number[] {
  const next = new Array(p.length)
  next[0] = -1
  let i = 0,
    j = -1
  while (i < p.length - 1) {
    if (j === -1 || p[i] === p[j]) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }
  return next
}
