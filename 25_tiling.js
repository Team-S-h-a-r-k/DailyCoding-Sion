// 세로 2 x 가로 n 크기의 보드 -> 2x1 타일로 보드를 채우는 경우의 수
let tiling = function (n) {
  const result = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
    result[i] = result[i-1] + result[i-2];
  }
  return result[n];
}

  
/**
 * ex) 가로 4 x 세로 2
 * 가로 2 (2개) + 세로 1 (2개)
 * 가로 1 (4개) + 세로 2 (1개)
 * => 즉, 2를 기준으로 놓는 경우와 1을 기준으로 놓는 경우의 수 밖에 없음
 * => D[i] = D[i-1] + D[i-2] // 두 경우의 수를 더 해주면 모든 경우의 수를 알 수 있다!
 */

// 레퍼런스 코드
  // 인덱스를 직관적으로 관리하기 위해
  // 앞 부분을 의미없는 데이터(dummy)로 채운다.
  const memo = [0, 1, 2];

  // 재귀를 위한 보조 함수(auxiliary function)을 선언)
  const aux = (size) => {
    // 이미 해결한 문제는 풀지 않는다.
    if (memo[size] !== undefined) return memo[size];
    if (size <= 2) return memo[n];
    memo[size] = aux(size - 1) + aux(size - 2);
    return memo[size];
  };
  return aux(n);
