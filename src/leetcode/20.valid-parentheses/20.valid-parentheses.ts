export function isValid(s: string): boolean {
  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const leftBracket = Object.values(map)
  const stack: string[] = []
  for (const ch of s) {
    // 左括号入栈
    if (leftBracket.includes(ch)) {
      stack.push(ch)
    } else {
      if (!stack.length || stack.pop() !== map[ch]) return false
    }
  }
  return !stack.length
}
