import { SequenceList } from '../SequenceList'

describe('SequenceList', () => {
  let list: SequenceList<number>

  beforeEach(() => {
    list = new SequenceList([1, 3, 5, 7, 9])
  })

  it('create an empty list', () => {
    expect(new SequenceList().isEmpty()).toBeTruthy()
  })

  it('create a list with elements', () => {
    expect(list.isEmpty()).toBeFalsy()
    expect(list.size()).toBe(5)
  })

  it('return the correct size', () => {
    expect(list.size()).toBe(5)
    expect(new SequenceList().size()).toBe(0)
  })

  it('return true if the list is empty', () => {
    expect(list.isEmpty()).toBeFalsy()
    expect(new SequenceList().isEmpty()).toBeTruthy()
  })

  it('clear the list', () => {
    list.clear()
    expect(list.isEmpty()).toBeTruthy()
  })

  it('get the element at the specified index', () => {
    expect(list.get(0)).toBe(1)
    expect(list.get(2)).toBe(5)
    expect(list.get(4)).toBe(9)
    expect(() => list.get(-1)).toThrow()
    expect(() => list.get(5)).toThrow()
  })

  it('find the element that satisfies the function', () => {
    expect(list.find((element) => element === 3)).toBe(3)
    expect(list.find((element) => element === 4)).toBeNull()
  })

  it('find the index of the element', () => {
    expect(list.indexOf(3)).toBe(1)
    expect(list.indexOf(4)).toBe(-1)
  })

  it('find the index of the element that satisfies the function', () => {
    expect(list.findIndex((element) => element === 3)).toBe(1)
    expect(list.findIndex((element) => element === 4)).toBe(-1)
  })

  it('insert the element at the specified index', () => {
    list.insert(0, 0)
    expect(list.get(0)).toBe(0)
    expect(list.get(1)).toBe(1)
    expect(list.size()).toBe(6)

    list.insert(3, 11)
    expect(list.get(3)).toBe(11)
    expect(list.get(4)).toBe(5)
    expect(list.size()).toBe(7)

    list.insert(7, 13)
    expect(list.get(7)).toBe(13)
    expect(list.get(6)).toBe(9)
    expect(list.size()).toBe(8)

    expect(() => list.insert(-1, 0)).toThrow()
    expect(() => list.insert(9, 0)).toThrow()
  })

  it('remove the element at the specified index', () => {
    expect(list.remove(0)).toBe(1)
    expect(list.get(0)).toBe(3)
    expect(list.size()).toBe(4)

    expect(list.remove(2)).toBe(7)
    expect(list.get(2)).toBe(9)
    expect(list.size()).toBe(3)

    expect(list.remove(2)).toBe(9)
    expect(() => list.get(2)).toThrow()
    expect(list.size()).toBe(2)

    expect(() => list.remove(-1)).toThrow()
    expect(() => list.remove(2)).toThrow()

    list.clear()
    expect(() => list.remove(0)).toThrow()
    list.push(1)
    expect(list.remove(0)).toBe(1)
  })

  it('unshift the element', () => {
    list.unshift(0)
    expect(list.get(0)).toBe(0)
    expect(list.get(1)).toBe(1)
    expect(list.size()).toBe(6)
  })

  it('shift the element', () => {
    expect(list.shift()).toBe(1)
    expect(list.get(0)).toBe(3)
    expect(list.size()).toBe(4)
  })

  it('push the element', () => {
    list.push(11)
    expect(list.get(5)).toBe(11)
    expect(list.size()).toBe(6)
  })

  it('pop the element', () => {
    expect(list.pop()).toBe(9)
    expect(list.get(3)).toBe(7)
    expect(list.size()).toBe(4)
  })

  it('traverse the list', () => {
    const callback = jest.fn(() => {
      return true
    })
    const callback2 = jest.fn((item, index) => {
      return index <= 1
    })
    list.forEach(callback)
    list.forEach(callback2)
    expect(callback).toHaveBeenCalledTimes(5)
    expect(callback2).toHaveBeenCalledTimes(3)
  })

  it('return the previous node of the specified node', () => {
    expect(list.prev(list.get(3))).toBe(list.get(2))
    expect(list.prev(1)).toBeNull()
  })

  it('return the next node of the specified node', () => {
    expect(list.next(list.get(3))).toBe(list.get(4))
    expect(list.next(10)).toBeNull()
  })

  it('return the array format of the list', () => {
    expect(list.toArray()).toEqual([1, 3, 5, 7, 9])
    expect(new SequenceList().toArray()).toEqual([])
  })

  it('return the string format of the list', () => {
    expect(list.toString()).toBe('1,3,5,7,9')
    expect(new SequenceList().toString()).toBe('')
  })
})
