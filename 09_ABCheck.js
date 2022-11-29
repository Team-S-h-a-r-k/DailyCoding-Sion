function ABCheck(str) {
  if (str === undefined) {
    return false;
  }

  str = str.toLowerCase(); 

  for (let i = 4; i < str.length; i++) {
    if (
      (str[i] === 'a' && str[i - 4] === 'b') ||
      (str[i] === 'b' && str[i - 4] === 'a')
    ) {
      return true;
    }
  }

  return false;
}

ABCheck('lane Borrowed'); // true
/**
 * 여전히 접근 방식에 어려움을 느낀다..ㅠㅠ
 * i = 4 
 * str[4] === a && str[0] === b -> X 
 * str[4] === b && str[0] === a -> X
 * i = 5
 * str[5] === a && str[1] === b -> X
 * str[5] === b && str[1] === a -> X
 * i = 6
 * str[6] === a && str[2] === b -> X
 * str[6] === b && str[2] === a -> O return true
 */