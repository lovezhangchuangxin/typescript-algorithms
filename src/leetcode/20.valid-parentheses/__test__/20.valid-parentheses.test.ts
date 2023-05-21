import { isValid } from '../20.valid-parentheses'

describe('isValid', () => {
  it('test case 1', () => {
    expect(isValid('()')).toBeTruthy()
  })
  it('test case 2', () => {
    expect(isValid('()[]{}')).toBeTruthy()
  })
  it('test case 3', () => {
    expect(isValid('(]')).toBeFalsy()
  })
})
