export function reverse(x: number): number {
  let result = 0
  while (x !== 0) {
    result = result * 10 + (x % 10)
    x = (x / 10) | 0
  }
  // 注：Js中位运算符把运算元当做 32 位整数，并在它们的二进制表现形式上操作。
  return (result | 0) === result ? result : 0
}
