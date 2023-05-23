import SequentialQueue from '../SequentialQueue'

describe('SequentialQueue', () => {
  let queue: SequentialQueue<number>

  beforeEach(() => {
    queue = new SequentialQueue<number>([1, 3, 5, 7, 9])
  })

  it('create an empty queue', () => {
    const queue = new SequentialQueue<number>()
    expect(queue.size()).toBe(0)
    expect(queue.isEmpty()).toBeTruthy()
  })

  it('create a queue with initial elements', () => {
    expect(queue.size()).toBe(5)
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.toString()).toBe('1,3,5,7,9')
  })

  it('enqueue', () => {
    queue.enQueue(11)
    expect(queue.size()).toBe(6)
    expect(queue.toString()).toBe('1,3,5,7,9,11')
  })

  it('dequeue', () => {
    expect(queue.deQueue()).toBe(1)
    expect(queue.size()).toBe(4)
    expect(queue.toString()).toBe('3,5,7,9')
    queue.clear()
    expect(() => queue.deQueue()).toThrow()
  })

  it('get the front element of the queue', () => {
    expect(queue.front()).toBe(1)
    queue.deQueue()
    expect(queue.front()).toBe(3)
    queue.clear()
    expect(() => queue.front()).toThrow()
  })

  it('convert the stack to a array', () => {
    expect(queue.toArray()).toEqual([1, 3, 5, 7, 9])
    queue.clear()
    expect(queue.toArray()).toEqual([])
  })

  it('convert the stack to a string', () => {
    expect(queue.toString()).toBe('1,3,5,7,9')
    queue.clear()
    expect(queue.toString()).toBe('')
  })
})
