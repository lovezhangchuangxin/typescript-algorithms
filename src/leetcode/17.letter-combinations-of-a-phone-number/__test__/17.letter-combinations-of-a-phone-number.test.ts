import { letterCombinations } from '../17.letter-combinations-of-a-phone-number'

describe('lengthOfLongestSubstring', () => {
  it('test case 1', () => {
    expect(letterCombinations("2")).toEqual(["a","b","c"])
  })
  it('test case 2', () => {
    expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
  })
  it('test case 3', () => {
    expect(letterCombinations("")).toEqual([])
  })
})
