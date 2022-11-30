function insertDash(str) {
  // 빈배열 할당
  let result = [];
  // 문자열의 길이만큼 반복
  for(let i = 0; i < str.length; i++) {
    // 앞의 문자 [i-1]와 현재 [i] 문자가 홀수라면
    if(str[i-1] % 2 !== 0 && str[i] % 2 !== 0) {
      // 하이픈을 넣습니다! ex) 4547 = 4547 + '-'
      result = result + '-';
    }
    // if문에 해당하지 않는다면 숫자값을 result에 할당(저장)
    result = result + str[i]
  }
  return result;
}
insertDash('454793'); // * 4547-9-3

// 오랜만에 첫 시도만에 성공스~