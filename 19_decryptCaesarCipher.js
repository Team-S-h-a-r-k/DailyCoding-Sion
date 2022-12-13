// 문자열 길이만큼 반복문을 돌려서 각 문자마다 왼쪽으로 이동할려고 했는데 (중첩 반복문)
// 쉽지 않다... 마음이 조급해서 그럴지도...

function decryptCaesarCipher(str, secret) {
  // abcdefghijklmnopqrstuvwxyz
  // 문자열에서 한 단어당 secret개 만큼 왼쪽으로 이동시켜 암호화
  // ex) secret = 3 / 'khoor' -> 'hello'

  let result = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let i=0; i<str.length; i++) {
    if (str[i] === ' ') {
      // 문자열을 해독하는 과정에서 공백이 유지되기 위함
      result = result + ' ';
    } 
    else {
      // 현재 문자의 알파벳 위치를 구한다.
      let order = alphabet.indexOf(str[i]);
      // 복호화는 반대 방향(왼쪽)으로 이루어기 때문에 seceret을 뺀다.
      // ! (현재 문자의 알파벳 위치 - secret개 + 26) % 26으로 나눈 나머지
      let decoding = (order - secret + alphabet.length) % alphabet.length;
      console.log(decoding)
      result = result + alphabet[decoding];
      console.log(result)
    }
  }
  return result;
}
decryptCaesarCipher('nzop delepd dfaazced jzf', 11);
/**
 * khoor = [10][7][14][14][17] alphabet에서의 인덱스
 * (10 - 3 + 26) % 26 = 7 = decoding
 * alphabet[7] = h
 * 공백이 아닐 경우 결과에 알파벳[디코딩] 문자를 넣어준다.
 * 
 * 현재 문자 위치에 시크릿 개수만 빼줘도 될 것 같지만 왜 때문인지 undefined가 나온다.
 * 같은 스터디원이신 무성님꼐서 해답을 주셨다!!!!
 * 
 * 그냥 빼버리면 마이너스 값이 나오기 때문에 인덱스 범위에 없으니 undefinded가 나온 것이었다!
 * 그래서 길이만큼 더 해서 나눠주면 양수로 바꿔주는 거랑 다름없다.
 */
 