for(i=0; i<words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1, 10);
}
// 첫 실패
// 이렇게 접근하니깐 값은 제대로 나오지만 통과는 되지 않았다.

/*
**miss**

slice에 어디까지 잘래낼 지를 설정해버려서 안 됐던 것 같다.

결국, slice 메서드를 잘 알지 못 했던 것이다.

slice는 잘라낸 그 다음 배열부터 반환해준다. 즉 1을 지정해주면,

1번째 다음 부터 문자열을 반환한다!
*/

function letterCapitalize(str) {
  let upper = '';
  let words = str.split(' '); // ['hello', 'world']
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
      console.log(words[i])
    }
  }

  upper = words.join(' ');
  return upper;
}
letterCapitalize('hello world');
// 성공
/**
 * 1. words[i][0].toUpperCase() 첫 글자를 대문자로 바꾸고
 * 2. words[i].slice(1) 첫 글자를 제외한 나머지 문자를 붙여준다
 * 3. 단어들을 공백 기준으로 붙여준다.(join)
 */