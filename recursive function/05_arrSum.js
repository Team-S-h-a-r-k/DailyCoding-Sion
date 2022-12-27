// 배열을 입력받아 모든 요소의 합을 리턴하기

function arrSum(arr) {
  // base case
  if (arr.length === 0) {
    return 0;
  }

  // recursive case
  let head = arr[0];
  let tail = arr.slice(1);
  return head + arrSum(tail);
}
arrSum([-1, -2, 1, 3]); // * 1

/**
 * [] -> 0 -----> base case
 * [3] => 0+3 = 3
 * [1, 3] => 0+3+1 = 4
 * [-2, 1, 3] => 0+3+1+(-2) = 2
 * [-1, -2, 1, 3] => 0+3+1+(-2)+(-1) = 1
 * 
 * => 배열의 첫번째 요소를 가져와서 더해주면 된다!
 * arr.slice(1); === 1번째 직전까지 === tail
 * 
 * head + tail
 * -1 + [-2, 1, 3]
 * -2 + [1, 3]
 * 1 + [3]
 * 3 + []
 * 
 * 3
 * 4
 * 2
 * 1
 */