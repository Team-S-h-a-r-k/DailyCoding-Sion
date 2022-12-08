// 실패한 코드
function isIsogram(str) {
  if(str === '') {
    return true;
  }

  strLow = str.toLowerCase()
  for(let i=1; i<strLow.length; i++) {
    if(strLow[i-1] !== strLow[i]) {
      console.log(strLow[i])
      return true;
    }
    return false;
  }
}
isIsogram('dropOut')

/**
 * 실패 코드이다.
 * 첫 반복에서 바로 true가 나오는 점과 앞 요소랑만 비교한다는 점에서
 * 잘못 짠 코드이다...
 * 
 * 어떻게하면 내부 요소들과 겹치지 않을 수 있을까를 고민하다가
 * 레퍼런스를 보고 아...객체! 라는 점을 깨달았다.
 */

// 성공 코드
 function isIsogram(str) {
  // 빈 배열일 땐 무조건 true가 나오게 하였다.
  if (str.length === 0) {
    return true;
  }

  // 빈 객체를 하나 만들어 주었다.
  let result = {};
  // 대소문자에 상관없이 비교하기 위해 모두 소문자로 변환해 준 새로운 문자를 만들어주었다.
  let strLowered = str.toLowerCase();

  for (let i = 0; i < strLowered.length; i++) {
    console.log(cache) // 이 위치에서 콘솔을 찍어보면 빈 객체에 true 값을 가진 문자만 하나씩 추가되는 걸 볼 수 있다.
    /**
     * {}
     * {d: true}
     * {d: true, r: true}
     * {d: true, r: true, o: true}
     * {d: true, r: true, o: true, p: true}
     */
    // * 2. 이 부분에서 이미 들어와있는 키 네임은 false로 나오게 된다.
    if (result[strLowered[i]]) {
      console.log(cache); // 이 위치에서는 true로 구성된 전체를 확인할 수 있었다. {d: true, r: true, o: true, p: true}
      return false;
    }
    result[strLowered[i]] = true; // * 1. 객체에 키와 값을 할당해 주고 있다!!!!
  }

  return true;
}
isIsogram('dropOut') // * false