function arrProduct(arr) {
  // base case
  if (arr.length === 0) {
    return 1;
  }

  // recursive case
  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return head * arrProduct(tail);
};
arrProduct([1, -2, 1, 3]); // -6

/**
 * head * tail
 * 1 * [-2, 1, 3]
 * -2 * [1, 3]
 * 1 * [3]
 * 3 * []===1
 * 
 * 3
 * 3
 * -6
 * -6
 */