export function isPalindrome(x: number): boolean {
  if (x < 0) return false
  return Number(x.toString().split('').reverse().join('')) === x
}

// 考虑到一些语言不能直接把数字转成字符串
export function isPalindrome2(x: number): boolean {
  if (x < 0) return false
  const stack = []
  const queue = []
  let remainder = 0
  while (x) {
    remainder = x % 10
    stack.push(remainder)
    queue.push(remainder)
    x = Math.floor(x / 10)
  }
  while (stack.length && queue.length) {
    if (stack.pop() !== queue.shift()) {
      return false
    }
  }
  return true
}
