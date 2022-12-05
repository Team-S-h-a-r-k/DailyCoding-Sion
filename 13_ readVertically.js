function readVertically(arr) {
  let temp = [];
  // 배열의 길이만큼 순회
  for (let i = 0; i < arr.length; i++) { // ex) arr.length = 2
    // 요소의 길이만큼 순회
    for (let j = 0; j < arr[i].length; j++) { // ex) 'hello'.length = 5
      if (temp.length === j) {
        // 첫번째 요소의 문자 하나하나 문자열로 만들어 배열에 넣어줌
        temp.push(arr[i][j]); // ex) arr[0][0] = 'h'
      } else {
        // 첫번째 요소에 두번째 요소의 문자 하나하나를 각각 합쳐줌
        temp[j] = temp[j] + arr[i][j]; 
      }
    }
  }

  // 요소들끼리 모두 합쳐줌
  let result = '';
  for (let i = 0; i < temp.length; i++) {
    result = result + temp[i];
  }

  return result;
}
readVertically([
  'hello',
  'world',
]);

  /**
   * 'hello'
   * 0 === 0 temp = ['h']
   * 1 === 1 temp = ['h','e']
   * 2 === 2 temp = ['h', 'e', 'l']
   * 3 === 3 temp = ['h', 'e', 'l', 'l']
   * 4 === 4 temp = ['h', 'e', 'l', 'l', 'o']
   * 
   * 'world'
   * 4 !== 0 
   * temp[0] = 'h' + 'w' -> ['hw', 'e', 'l', 'l', 'o']
   * temp[1] = 'e' + 'o' -> ['hw', 'eo', 'l', 'l', 'o']
   * temp[2] = 'l' + 'r' -> ['hw', 'eo', 'lr', 'l', 'o']
   * temp[3] = 'l' + 'l' -> ['hw', 'eo', 'lr', 'll', 'o']
   * temp[4] = 'o' + 'd' -> ['hw', 'eo', 'lr', 'll', 'od']
   * 
   * temp.length = 5
   * temp[0] / ''+ 'hw' = 'hw'
   * temp[1] / 'hw'+ 'eo' = 'hweo'
   * temp[2] / 'hweo' + 'lr' = 'hweolr'
   * temp[3] / 'hweolr' + 'll' = 'hweolrll'
   * temp[4] / 'hweolrll' + 'od' = 'hweolrllod'
   */