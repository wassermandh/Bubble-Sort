function swap(array, i, current, next) {
  array[i] = next;
  array[i + 1] = current;
  return array;
}

function bubbleSort(array) {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      let current = array[i];
      let next = array[i + 1];
      if (current > next) {
        sorted = false;
        array = swap(array, i, current, next);
      }
    }
  }
  return array;
}
