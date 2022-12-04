// 짧은 문자열을 구해서 그 문자를 splice로 빼내고
// 긴 문자열을 구해서 그 문자를 splice로 빼낸 후
// 남은 문자열을 합치면 된다고 생각했는데
// 위에 완벽하게 만족하는 코드를 적는게 쉽지 않았다.
// 결국 레퍼런스를 참고해서 레퍼런스 풀이를 해보겠다. [결론]

function removeExtremes(arr) {
  // 짧았을 때 길었을 때 length를 담을 변수를 선언했다.
  let long = 0;
  let short = 20; // 짧은 문자열을 구하는 것이기 때문에 처음부터 0값을 주면 if문이 실행되지 않음! 
                  // 그래서 요소들이 20이하라는 조건이 문제에 있었기 때문에 임의의 값을 할당해줌
  // Index를 담을 변수를 선언했다.
  let longIdx = 0;
  let shortIdx = 0;

  // 0부터 배열의 길이만큼 순회할 때
  for (let i = 0; i < arr.length; i++) {
    // 배열의 i번째 요소의 길이가 long에 담긴 요소보다 길이가 같거나 길다면
    if (arr[i].length >= long) {
      // 그 요소를 long에 담습니다.
      long = arr[i].length;
      // 그 요소의 인덱스 i도 담습니다.
      longIdx = i;
    }

    // 배열의 i번째 요소의 길이가 short에 담긴 요소보다 길이가 같거나 짧다면
    if (arr[i].length <= short) {
      // 그 요소를 short에 담습니다.
      short = arr[i].length;
      // 그 요소의 인덱스 i도 담습니다.
      shortIdx = i;
    }
  }

  // 결과를 뜻하는 식별자에 빈배열을 할당하여 선언합니다.
  let result = [];
  // 0부터 배열의 길이만큼 순회합니다.
  for (let i = 0; i < arr.length; i++) {
    // i가 짧은문자를 구한 인덱스 값과 긴문자를 구한 인덱스 값과 같지 않다면,
    if (i !== shortIdx && i !== longIdx) {
      // 빈배열에 배열의 i번째 요소를 push합니다.
      result.push(arr[i]);
    }
  }

  return result;
}
removeExtremes(['a', 'b', 'c', 'def']); // * ['a', 'b']

/**
 * ['a', 'b', 'c', 'def'].length = 4
 * arr[0] = a.length = 1 = long / 0 = longIdx
 *        = a.length = 1 = short / 0 = shortIdx
 * arr[1] = b.length = 1 = long / 1 = longIdx
 *        = b.length = 1 = short / 1 = shortIdx
 * arr[2] = c.length = 1 = long / 2 = longIdx
 *        = c.length = 1 = short / 2 = shortIdx -> short=1 shortIdx=2
 * arr[3] = def.length = 3 = long / 3 = longIdx -> long=3 longIdx=3
 *        = def.length = 1 = X / X
 * 2와 3에 해당하지 않는 인덱스만 push!! [0], [1] -> ['a', 'b']
 */