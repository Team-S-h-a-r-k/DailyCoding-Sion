ffunction compressString(str) {
  // 3개 이상 반복된 문자는 반복된 수와 해당 문자의 조합으로 새로운 문자열 만들기
  let result = '';
  let preStr = str[0];
  let count = 1;

  // 아래 코드를 적기 전까지는 '3wggoppo' 이런식으로 마지막 'pppp' 부분이 잘려서 나오지 않았다.
  // preStr = str[i]에서 비교할 마지막 문자가 잘 들어가서 카운트도 잘 작동하지만 출력이 되지 않는 것이다.
  // 이는 첫번째 if문에서 카운트가 완성되고 다시 for문으로 돌아오면 이미 문자열이 끝났기 때문에
  // else문에 접근할 수 없기 때문이다. 그래서 빈 공백문자를 추가하여 else문에 접근할 수 있게 해줘야 잘 출력이 된다.
  str = str + ' ';
  console.log(str)

  for(let i=1; i<str.length; i++) {
    // 1. 이전 문자와 현재 문자와 같은 지 비교한다. 같다면 카운트가 1씩 올라간다.
    if(str[i] === preStr) {
      count++;
      console.log(count)
    }
    // 2. 더이상 이전 문자와 같지 않다면 카운트와 문자를 합쳐준다.
    // 3. 3개 이하로 반복된 문자는 카운된 수만큼 반복시켜준다.
    else {
      if(count >= 3) {
        result = result + `${count}${preStr}`;
        console.log(result);
      } else {
        result = result + preStr.repeat(count);
        console.log(result);
      }
      // 다음 문자로 바꿔서 반복을 알아본다. 해당 문자는 이미 한 번 들어왔기 때문에
      // 카운트를 1로 리셋 세팅해준다.
      preStr = str[i];
      console.log(preStr)
      count = 1;
    }
  }
  return result;
}
compressString('wwwggoppopppp');

/**
 * 'wwwggoppopppp ' -> 이런식으로 공백을 추가한 str을 재할당한다.
 * 이전 문자와 비교해야할 값이 있어야하기 때문에 첫번째 문자를 할당해주고 카운트도 1로 세팅해주었다.
 * 그럼 첫번째 w가 들어가서 반복문을 돌면 이런 결과가 나온다.
 * count = 2
 * count = 3
 * result = '3w' 카운트가 3이상이라서 적용된 else문 내부 if문
 * 
 * w가 끝나고 다음 g문자에서 '3w'문자가 완성되자마자 preStr이랑 count를 리셋 세팅시켜준다.
 * preStr = g
 * count = 2
 * result = '3wgg'
 * 
 * 다음 문자 o에서 '3wgg'가 완성되고 o로 세팅
 * preStr = o
 * result = '3wggo'
 * 
 * 다음 문자 p에서 '3wggo'가 완성되고 p로 세팅
 * preStr = p
 * count = 2
 * result = '3wggopp'
 * 
 * 다음 문자 o에서 '3wggopp'가 완성되고 o로 세팅
 * preStr = o
 * result = '3wggoppo'
 * 
 * 다음 문자 p에서 '3wggoppo'가 완성되고 p로 세팅
 * preStr = p
 * count = 2
 * count = 3
 * count = 4
 * result = '3wggoppo4p' // 다음 문자 ' ' 빈 공백에서 완성된다.
 */