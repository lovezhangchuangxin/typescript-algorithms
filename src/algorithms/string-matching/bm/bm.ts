/**
 * Boyer-Moore
 */

/**
 * BM算法
 * @param {string} s 主串
 * @param {string} p 模式串
 * @returns {number} 返回模式串在主串中的索引位置，未找到返回-1
 */
export function bmMatch(s: string, p: string): number {
  if (s.length < p.length) return -1
  if (p.length <= 0) return 0
  // 先求出坏字符表和好后缀表
  const badCharTable = getBadCharTable(p)
  const [goodSuffixTable, isPrefixTable] = getGoodSuffixTable(p)
  let i = 0
  while (i <= s.length - p.length) {
    let j
    for (j = p.length - 1; j >= 0; j--) {
      if (s[i + j] !== p[j]) break
    }
    if (j < 0) return i
    const x = j - badCharTable[s.charCodeAt(i + j)]
    let y = 0
    if (j < p.length - 1 && p.length - i - j > 0) {
      y = moveByGoodSuffix(j, p.length, goodSuffixTable, isPrefixTable)
    }
    i = i + Math.max(x, y)
  }
  return -1
}

/**
 * @param p 模式串
 * @returns 返回坏字符表
 */
function getBadCharTable(p: string): number[] {
  const table = new Array(256).fill(-1)
  for (let i = 0; i < p.length; i++) {
    table[p.charCodeAt(i)] = i
  }
  return table
}

/**
 * @param p 模式串
 * @returns 返回好后缀表和是否前缀表
 */
function getGoodSuffixTable(p: string): [number[], boolean[]] {
  const table = new Array(p.length).fill(-1)
  const prefix = new Array(p.length).fill(false)
  for (let i = 0; i < p.length - 1; i++) {
    let j = i,
      k = 0
    while (j >= 0 && p[j] === p[p.length - 1 - k]) {
      j--
      k++
      table[k] = j + 1
    }
    if (j === -1) prefix[k] = true
  }
  return [table, prefix]
}

/**
 * 好后缀移动步数
 * @param j 坏字符下标
 * @param m 模式串长度
 * @param gs 好后缀表
 * @param prefix 是否前缀表
 */
function moveByGoodSuffix(j: number, m: number, gs: number[], prefix: boolean[]): number {
  const k = m - 1 - j
  if (gs[k] !== -1) return j - gs[k] + 1
  for (let r = j + 2; r <= m - 1; r++) {
    if (prefix[m - r]) return r
  }
  return m
}
