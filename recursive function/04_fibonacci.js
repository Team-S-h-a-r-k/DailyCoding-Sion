function fibonacci(num) {
  // base case
  if (num <= 1) {
    return num;
  }

  // recursive case
  return fibonacci(num-1) + fibonacci(num-2);
}
/**
 * num=9번째 / 8번째(=21) + 7번째(=13) = 34
 *          -> (7번째 + 6번째) + (6번째 + 5번째)
 * num=5번째 / 4번째(=3) + 3번째(=2) = 5
 * num=2번째 / 1번째(=1) + 0번째(=0) = 1
 * .
 * num = (num-1) + num(-2) -> recursive case
 * .
 * num=1번째 / 1 -> base case
 * num=0번째 / 0 -> base case
 */

/**
 * fibonacci(5) =      fibonacci(4)        +        fibonacci(3);
 *             (3번째(2)    +    2번째(1))     +    (2번째(1) + 1번째(1))
 *       (2번째(1) + 1번째(1)) (1번째 + 0번째)     (1번째 + 0번째)
 * (1번째(1) + 0번째(0))
 * 1 + 0
 * 1 + 1
 * 1 + 0
 * 2 + 1
 * 
 * 1 + 0
 * 1 + 1
 * 
 * 3 + 2
 * => 5
 */