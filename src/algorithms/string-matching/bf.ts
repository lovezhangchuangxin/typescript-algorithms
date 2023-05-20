/**
 * Brute Force（暴力）
 */

/**
 * BF算法
 * @param s 主串
 * @param p 模式串
 * @returns 返回模式串在主串中的索引位置，未找到返回-1
 */
export function bfMatch(s: string, p: string): number {
  if (s.length < p.length) return -1
  if (p.length <= 0) return 0
  let i, j
  for (i = 0; i < s.length - p.length + 1; i++) {
    for (j = 0; j < p.length; j++) {
      if (s[i + j] !== p[j]) break
    }
    if (j === p.length) return i
  }
  return -1
}

/**
 * BF算法（回退）
 * @param s 主串
 * @param p 模式串
 * @returns 返回模式串在主串中的索引位置，未找到返回-1
 */
export function bfMatch2(s: string, p: string): number {
  if (s.length < p.length) return -1
  if (p.length <= 0) return 0
  let i = 0,
    j = 0
  while (i < s.length && j < p.length) {
    if (s[i] === p[j]) {
      i++
      j++
    } else {
      i = i - j + 1
      j = 0
    }
  }
  if (j === p.length) return i - j
  return -1
}
