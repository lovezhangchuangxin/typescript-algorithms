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

  it('return the string format of set', () => {
    expect(set.toString()).toBe('1,3,5,7,9')
  })

  it('return union of two sets', () => {
    const otherSet = new CustomSet<number>([2, 4, 6, 8, 10])
    const unionSet = set.union(otherSet)
    expect(unionSet.values().sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort())
  })

  it('return intersection of two sets', () => {
    const otherSet = new CustomSet<number>([1, 3, 6, 8, 10, 11])
    const intersectionSet = set.intersection(otherSet)
    expect(intersectionSet.values()).toEqual([1, 3])

    const otherSet2 = new CustomSet<number>([2, 4, 10])
    const intersectionSet2 = set.intersection(otherSet2)
    expect(intersectionSet2.values()).toEqual([])
  })

  it('return difference of two sets', () => {
    const otherSet = new CustomSet<number>([1, 3, 6, 8, 10])
    const differenceSet = set.difference(otherSet)
    expect(differenceSet.values()).toEqual([5, 7, 9])
  })

  it('return true if set is subset of other set', () => {
    const otherSet = new CustomSet<number>([1, 3, 5, 7, 9, 11])
    expect(set.isSubsetOf(otherSet)).toBeTruthy()
    const otherSet2 = new CustomSet<number>([1, 3, 5, 7])
    expect(set.isSubsetOf(otherSet2)).toBeFalsy()
  })
})
