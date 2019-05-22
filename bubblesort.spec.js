describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('returns an array', function() {
    expect(Array.isArray(bubbleSort([-5, 2, 4, 8, 4]))).toEqual(true);
  });
  it('correctly an array with 1 integer', function() {
    expect(bubbleSort([4])).toEqual([4]);
  });
  it('correctly sorts the array with negative numbers', function() {
    expect(bubbleSort([-5, -18, 0, 2, -3])).toEqual([-18, -5, -3, 0, 2]);
  });
  it('correctly sorts array with mulitple simiilar integers', function() {
    expect(bubbleSort([-5, 2, 4, 8, 4])).toEqual([-5, 2, 4, 4, 8]);
  });
  it('returns the same length', function() {
    expect(bubbleSort([5, 2, 1, 8, 4, 3, 123, 3245, 54564]).length).toEqual(9);
  });
});
