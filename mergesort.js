function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const firstHalf = wholeArray.slice(
    0,
    wholeArray.length / 2 + (wholeArray.length % 2)
  );
  const secondHalf = wholeArray.slice(
    wholeArray.length / 2 + (wholeArray.length % 2)
  );
  return [firstHalf, secondHalf];
}

function merge(nestedArray) {
  const result = [];
  const totalLength = nestedArray[0].length + nestedArray[1].length;

  while (result.length < totalLength) {
    if (nestedArray[0][0] < nestedArray[1][0]) {
      const ele = nestedArray[0].shift();
      result.push(ele);
    } else if (nestedArray[0][0] > nestedArray[1][0]) {
      const ele = nestedArray[1].shift();
      result.push(ele);
    } else if (nestedArray[0].length === 0) {
      result.push(...nestedArray[1]);
    } else if (nestedArray[1].length === 0) {
      result.push(...nestedArray[0]);
    }
  }

  return result;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const [firstHalf, secondHalf] = split(array);
  const subLeft = mergeSort(firstHalf);
  const subRight = mergeSort(secondHalf);

  return merge([subLeft, subRight]);
}
