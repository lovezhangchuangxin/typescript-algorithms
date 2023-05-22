/**
 * 寻找数学规律
 */
export function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s
  let res = ''
  const gap = 2 * numRows - 2
  let index = 0,
    index2 = 0,
    index3 = 0
  let flag = true
  for (let row = 0; row < numRows; row++) {
    // 每一行间隔为gap或者gap - 2 * row
    res += s[row]
    index = 1
    flag = true
    while (flag) {
      index3 = row + index * gap
      index2 = index3 - 2 * row
      if (row !== numRows - 1 && index2 < s.length) res += s[index2]
      if (row !== 0 && index3 < s.length) res += s[index3]
      if (index2 >= s.length && index3 >= s.length) flag = false
      index++
    }
  }
  return res
}

/**
 * 模拟
 */
export function convert2(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s
  const res: string[] = new Array(numRows).fill('')
  let i = 0,
    flag = -1
  for (const c of s) {
    res[i] += c
    if (i === 0 || i === numRows - 1) flag = -flag
    i += flag
  }
  return res.flat().join('')
}
