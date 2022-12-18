function isOdd (num) {
  // * base case : 탈출 조건
  if (num === 0) {
    return false;
  }
  if (num === 1) {
    return true;
  }
  // num이 음수일 경우
  if (num < 0) {
    return isOdd(-num); // 양수로 바뀐다
  } 

  // * recursive case
  return isOdd(num % 2)
}
isOdd(-8); // * false

/**
 * isOdd(5) % 2 === 0 -> true
 * isOdd(4) % 2 !== 0 -> false
 * .
 * .
 * .
 * .
 * isOdd(1) === false -> base case
 * isOdd(0) === true -> base case
 */