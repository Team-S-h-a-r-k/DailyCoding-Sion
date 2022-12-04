function findBugInApples(arr) {
  // 배열의 길이를 순회하는 문
  for (let i=0; i<arr.length; i++) {
    // 해당 요소의 길이를 순회하는 문
    for (let j=0; j<arr[i].length; j++) {
      // i번째 줄에 j번째에 'B'가 있다면!
      if (arr[i][j] === 'B') {
        // B의 위치를 나타내는 값을 반환합니다.
        return [i, j];
      }
    }
  }
}
findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);