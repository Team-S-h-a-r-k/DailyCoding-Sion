// sample이 base의 부분집합 여부 리턴(각 배열에 중복되는 요소는 없다고 가정)

const isSubsetOf = function (base, sample) {
  // 입력받은 배열들을 오름차순으로 정렬
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  // item = sample의 요소
  // arr = base 배열
  // form = base 배열의 인덱스 === 0
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx); // 함수 호출
    if (baseIdx === -1) return false;
  }
  return true;
};
let base = [1, 2, 3, 4, 5];
let sample = [1, 3];

isSubsetOf(base, sample); // --> true

// 흠... 이해가 될듯 말듯... 꼭 다시 풀어보기!!!!!!!!!