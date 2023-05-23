import LinkedStack from '../LinkedStack'

describe('LinkedStack', () => {
  let stack: LinkedStack<number>

  beforeEach(() => {
    stack = new LinkedStack<number>([1, 3, 5, 7, 9])
  })

  it('create an empty stack', () => {
    const stack = new LinkedStack<number>()
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('create a stack with initial elements', () => {
    expect(stack.size()).toBe(5)
    expect(stack.isEmpty()).toBeFalsy()
  })

  it('clear the stack', () => {
    stack.clear()
    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('push an element to the stack', () => {
    stack.push(11)
    expect(stack.size()).toBe(6)
    expect(stack.peak()).toBe(11)
  })

  it('pop an element from the stack', () => {
    expect(stack.pop()).toBe(9)
    expect(stack.size()).toBe(4)
    expect(stack.peak()).toBe(7)
    stack.clear()
    expect(() => stack.pop()).toThrow()
  })

  it('get the top element of the stack', () => {
    expect(stack.peak()).toBe(9)
    stack.pop()
    expect(stack.peak()).toBe(7)
    stack.clear()
    expect(() => stack.peak()).toThrow()
  })

  it('convert the stack to an array', () => {
    expect(stack.toArray()).toEqual([1, 3, 5, 7, 9])
    stack.clear()
    expect(stack.toArray()).toEqual([])
  })

  it('convert the stack to a string', () => {
    expect(stack.toString()).toBe('1,3,5,7,9')
    stack.clear()
    expect(stack.toString()).toBe('')
  })
})
