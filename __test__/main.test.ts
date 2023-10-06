import { findDeletedNumber } from '../src/findDeletedNumber'

// [], [] => 0
// [1], [1] => 0
// [1], [] => 1
// [1,2], [1,2] => 0
// [1,2], [1] => 2
// [1,2,3,4,5], [1,2,3,4,5]) => 0
// [1,2,3,4,5], [5,4,3,2,1]) => 0
// [1,2,3,4,5], [3,4,1,5]) => 2 // 'Deletion'
describe('findDeletedNumber', () => {
  it('return 0 when no number have been deleted', () => {
    expect(findDeletedNumber([],[])).toBe(0)
    expect(findDeletedNumber([1],[1])).toBe(0)
  });
  it('return the number that has been deleted', () => {
    expect(findDeletedNumber([1],[])).toBe(1)
  });
});