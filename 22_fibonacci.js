function fibonacci(n) {
  // naive solution: O(2^N)이라고 되어있어서 테스트 통과가 안 된다...
  // base case : 탈출 조건
  // if (n <= 1) return n;
  // recursive case
  // return fibonacci(n-1) + fibonacci(n-2);

  /**
 * n=5 / 3 + 2 = 5
 * n=4 / 2 + 1 = 3
 * n=3 / 1 + 1 = 2
 * n=2 / 0 + 1 = 1
 * n=1 / 1 -> base case
 * n=0 / 0 -> base case
 * 
 * n = (n-1) + (n-2) -> recursive case
 */

  // dynamic with meoization: O(N)
  // fibo(10)
  // = fibo(9) + fibo(8) // 더 분해하면 아래와 같다.
  // = fibo(8) + fibo(7) + fibo(7) + fibo(6)
  // ... 
  // ! 이전 항들의 값을 가지고 계산하기 때문에 중복되는 부분들이 많다!!!
  // ! 계산을 진행할 때 앞서 계산한 값을 가지고 있다면, 함수를 실행하지 않고 값을 가져오기만 하면 된다.

  const memo = [0, 1];
  const aux = (n) => {
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    // 0과 1일 경우
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n]; // meno[8] = 21
  };
  return aux(n); // meno[8] = 21
}
fibonacci(8); // 21 (13+8)

