import CustomSet from '../CustomSet'

describe('CustomSet', () => {
  let set: CustomSet<number>

  beforeEach(() => {
    set = new CustomSet<number>([1, 3, 5, 7, 9])
  })

  it('create an empty set', () => {
    const set = new CustomSet<number>()
    expect(set.size()).toBe(0)
    expect(set.isEmpty()).toBe(true)
  })

  it('create a set with initial elements', () => {
    expect(set.size()).toBe(5)
    expect(set.isEmpty()).toBe(false)
    expect(set.has(1)).toBe(true)
  })

  it('clear set', () => {
    set.clear()
    expect(set.size()).toBe(0)
    expect(set.isEmpty()).toBe(true)
  })

  it('check element in set', () => {
    expect(set.has(1)).toBe(true)
    expect(set.has(2)).toBe(false)
  })

  it('add element to set', () => {
    set.add(11)
    expect(set.size()).toBe(6)
    expect(set.has(11)).toBe(true)
  })

  it('delete element from set', () => {
    expect(set.delete(1)).toBeTruthy()
    expect(set.size()).toBe(4)
    expect(set.has(1)).toBeFalsy()

    expect(set.delete(2)).toBeFalsy()
    expect(set.size()).toBe(4)
  })

  it('return values of set', () => {
    expect(set.values()).toEqual([1, 3, 5, 7, 9])
  })
})
