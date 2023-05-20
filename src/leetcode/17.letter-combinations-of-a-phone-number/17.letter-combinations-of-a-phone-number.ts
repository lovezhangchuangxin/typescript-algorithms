const mp: Map<string, string> = new Map<string, string>([
  ['2', 'abc'],
  ['3', 'def'],
  ['4', 'ghi'],
  ['5', 'jkl'],
  ['6', 'mno'],
  ['7', 'pqrs'],
  ['8', 'tuv'],
  ['9', 'wxyz'],
])

function backTrace(res: string[], path: string, digits: string) {
  if (path.length === digits.length) {
    res.push(path)
  }
  const index = path.length
  for (const c of mp.get(digits[index]) || '') {
    backTrace(res, path + c, digits)
  }
}

export function letterCombinations(digits: string): string[] {
  const res: string[] = []
  const path = ''
  if (!digits) return res
  backTrace(res, path, digits)
  return res
}
