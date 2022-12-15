// 3개의 요소를 곱해 나올 수 있는 최대값
// * 오름차순으로 정렬하여 뒤에 오는 가장 큰 수들을 곱한다 === 최대값
// * but, 마이너스는 제외가 되어버린다. 때문에 마이너스로 계산되는 경우도 만들어준다! (음수 * 음수 = 양수)
const largestProductOfThree = function (arr) {
  // 오름차순 정렬
  const sorted = arr.sort((a, b) => a - b); 
  // 배열 길이
  const length = arr.length; 
  // 배열의 마지막 요소 * 배열의 뒤에서 두번째 요소 * 배열의 뒤에서 세번째 요소
  const candi1 = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];
  // 배열의 마지막 요소 * 배열의 첫번째 요소 * 배열의 두번째 요소
  const candi2 = sorted[length - 1] * sorted[0] * sorted[1];
  // 입력된 숫자 중 가장 큰 숫자를 반환
  return Math.max(candi1, candi2);
};
largestProductOfThree([2, 3, -11, 7, 5, -13]);
/**
 * 오름차순 정렬 [-13, -11, 2, 3, 5, 7] = sorted
 * 배열 길이 (6)
 * 
 * candi1 = sorted[5] * sorted[4] * sorted[3] = 7*5*3 = 105
 * candi2 = sorted[5] * sorted[0] * sorted[1] = 7*-13*-11 = 1001
 * 1001 -> 가장 큰 수를 반환
 */