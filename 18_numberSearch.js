function numberSearch(str) {
  // 문자열에서 숫자를 찾는다.
  // 숫자를 모두 더한다.
  // 숫자와 공백을 뺀 문자열 길이로 나눈다
  // 정수로 반올림하여 반환한다.

  // 빈 문자열을 입력받을 경우, 0을 리턴한다.
  if (str === '') {
    return 0;
  }

  // * 1. 숫자도 문자열로 인식되고 있기 때문에 숫자로 구성된 문자열을 만든다.
  let numFind = '0123456789'
  let sum = 0;
  let newStr = '';

  for (let i=0; i<str.length; i++) {
    // * 2. str[i]번째 문자가 numFind에 있다면, 즉, 숫자라면 숫자타입으로 변환하여 합쳐준다!
    if(numFind.includes(str[i])) {
      sum = sum + Number(str[i]);
      // console.log(sum);
    }
    // * 3. '숫자'도 아니고 공백도 아니라면 더해준다. 즉, 문자로만 구성된 문자열을 재구성!
    else if(str[i] !== ' ') {
      newStr = newStr + str[i];
      // console.log(newStr);
    }
  }
  return Math.round(sum / newStr.length);
}
numberSearch('Hello6 9World 2,');

// 잘 적성한 것 같은데 왜 안 될까 고민하다가 콘솔을 찍어보니 숫자도 문자열로 인식되고
// 있음을 발견하고 정말 아차..! 했다.