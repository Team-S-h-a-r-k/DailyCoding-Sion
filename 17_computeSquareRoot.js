function computeSquareRoot(num) {
  // 제곱근의 근사값 구하기
   
  let multipleNum = 1;
  while (true) {
    // 2. multipleNum ** 2가 num이랑 같다면 그 값을 반환
    if (multipleNum ** 2 === num) {
      return multipleNum;
    }
    // 3. multipleNum ** 2가 num을 넘어섰다면 "반복을 멈추고" 1을 뺀 그 값을 반환
    else if (multipleNum ** 2 > num) {
      multipleNum -= 1;
      break;
    }
    // 1. multipleNum이 1씩 커지면서
    multipleNum++;
  }
  // 바빌로니아법
  let count = 0;
  let guess = multipleNum; // 위에서 구한 최종 근사값 지정
  // console.log(guess);
  // 아래 부분은 이해가 더 필요할 것 같다.
  while (true) {
    count++;
    if (count === 1000) {
      return parseFloat(guess.toFixed(2));
    }
    guess = (guess + (num/guess)) / 2;
  }
  return guess; // 2.24
}
computeSquareRoot(5);

/**
 * 오늘은 문제 접근에서 막혀서 결국 서칭해서 바빌로니아법이라는 걸 알았는데
 * 생각보다 까다롭다....
 */

// 아래 코드는 레퍼런스 코드이다.
function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let base = 1;
  for (let i = 0; i < diffs.length; i++) {
    while (base * base < num) {
      base = base + diffs[i];
      console.log(base); // * 1
    }

    if (base * base === num) {
      return base;
    } else {
      base = base - diffs[i];
    }
  }
  return Number(base.toFixed(2));
}
computeSquareRoot(5);

/**
 * 1. console.log(base);
 * while 반복문의 base 결과이다.
 * 2
 * 3
 * 2.1
 * 2.2
 * 2.3000000000000003
 * 2.21
 * 2.2199999999999998
 * 2.2299999999999995
 * 2.2399999999999993
 * 2.2309999999999994
 * 2.2319999999999993
 * 2.232999999999999
 * 2.233999999999999
 * 2.234999999999999
 * 2.235999999999999
 * 2.2369999999999988
 * 
 * 2.2369999999999988.toFixed(2) = 2.24
 */