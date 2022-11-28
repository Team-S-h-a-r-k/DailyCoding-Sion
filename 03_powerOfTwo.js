function powerOfTwo(num) {
  if (num === 1) {
    return true;
  }
  while (num % 2 === 0) {
    if (Math.sqrt(num)) {
      return true;
    }
  }
  return false;
}
// 1차 실패
// powerOfTwo(100) -> false가 나와야 하는데 true가 나온다...


function powerOfTwo(num) {
  if (num === 1) {
    return true;
  }
	for (let two = 2; two < num; two *= 2) {
		if (two === Math.sqrt(num)) {
			return true;
    }
  } 
  return false;
}
// 2차 실패

function powerOfTwo(num) {
  if (num === 1) {
    return true;
  }
	
	// 0은 false를 의미한다. 값이 0이면 실행되지 않는다.
	// 짝수이면 조건문이 실행되지 않고, 홀수이면 false를 반환
  if (num % 2) {
    return false;
  }

  let powered = 2;
  while (powered < num) {
    powered = powered * 2;
  }

  return powered === num;
}
// 결국 레퍼런스의 도움을 받았다... 