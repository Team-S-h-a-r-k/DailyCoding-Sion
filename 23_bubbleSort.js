const bubbleSort = function (arr) {
  // 오름차순 정렬 리턴 => 버블 정렬

  // 1. 배열길이만큼 순회한다.
  // 앞의 요소와 비교하기위해 두 번재 요소부터 반복을 시작한다!
  for (let i=1; i<arr.length; i++) {
    // 현재 요소를 저장하는 변수
    let current = arr[i]
    // 이전 요소를 가리키는 변수
    let left = i-1;

    // 조건이 true일 때까지 반복문을 돌린다!
    // left가 0보다 크거나 같고, 이전 요소가 현재 요소보다 크다면! 
    // 잘 정렬되어 있다면 while문은 실행되지 않는다.
    while(left >= 0 && arr[left] > current) {
      // arr[i] = arr[left] -> arr[i]번째 위치에 수가 더 컸던 arr[left]값을 넣어준다!
      // 즉, 두 데이터의 교환해주는 것이다! (버블 정렬)
      arr[left + 1] = arr[left];
      // 왼쪽 값 1씩 줄여가며 left가 0이 아닐 때까지 비교!!(while문 실행)
      left--;
    }
    // 'arr[i]'가 현재요소로 저장!
    arr[left + 1] = current;
    console.log(`${i}회전: ${arr}`)
  }
  return arr;
};
bubbleSort([5, 7, 2, 1, 3]); // * (5) [1, 2, 3, 5, 7]
/**
 * arr[1]
 * current = 7 
 * -> left = arr[0] = 5 
 * while문 성립X
 * arr[1] = 7 = current
 * * 1회전: 5,7,2,1,3
 * 
 * arr[2]
 * current = 2 
 * -> left = arr[1] = 7
 * arr[2] = 7
 * -> left = arr[0] = 5 
 * arr[1] = 5;
 * -> while문 탈출
 * arr[0] = 2 = current
 * * 2회전: 2,5,7,1,3
 * 
 * arr[3]
 * current = 1
 * -> left = arr[2] = 7
 * arr[3] = 7
 * -> left = arr[1] = 5
 * arr[2] = 5;
 * -> left = arr[0] = 2
 * arr[1] = 2;
 * -> while문 탈출
 * arr[0] = 1 = current
 * * 3회전: 1,2,5,7,3
 * 
 * arr[4]
 * current = 3
 * -> left = arr[3] = 7
 * arr[4] = 7
 * -> left = arr[2] = 5
 * arr[3] = 5;
 * -> left = 1
 * -> while문 탈출 
 * arr[2] = 3 = current
 * * 4회전: 1,2,3,5,7
 */

// ! 아래는 레퍼런스 코드이다!
// 최대 길이 80,000 자연수 배열도 정렬이 가능하다
const swap = function (idx1, idx2, arr) {
  // 1. 두 변수를 바꾸는 방법
  // 구조분해할당을 활용한 방법 (배열이 참조타입이라 가능)
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

let bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // swap 횟수를 기록한다.
    // 어떤 요소도 swap되지 않은 경우, 이미 정렬된 상태이다.
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < arr.length - 1 - i'만 비교하면 된다.
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr);
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
};