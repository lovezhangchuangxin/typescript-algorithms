import SortTester from '../../sort-tester'
import selectionSort from '../selection-sort'

describe('selection-sort', () => {
  it('should sort array', () => {
    SortTester.testSort(selectionSort)
  })
})
