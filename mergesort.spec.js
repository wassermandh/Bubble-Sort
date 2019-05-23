describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
});

describe('Merge Function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(merge([[2, 4, 6, 8], [1, 3, 5, 7, 9]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
    expect(merge([[1, 3, 6], [4, 5]])).toEqual([1, 3, 4, 5, 6]);
  });
});

describe('MergeSort Function', function() {
  it('sorts a given array', function() {
    expect(mergeSort([5, 10, 4, 3, 8, 32])).toEqual([3, 4, 5, 8, 10, 32]);
  });
});
