// 수를 입력받아 n-factorial(n!; 엔-팩토리얼) 값을 리턴
// factorial(0)은 1로 정의 / 음수 입력은 들어오지 않는다.

function factorial(num) {
  // base case
  if(num <= 1) {
    return 1
  }

  // recusive case
  return num * factorial(num-1);
}
factotial(10); // * 3628800
/**
 * num=10 / 10 * factorial(9)
 * num=9 / 9 * factorial(8)
 * num=8 / 8 * factorial(7)
 * num=7 / 7 * factorial(6)
 * num=6 / 6 * factorial(5)
 * num=5 / 5 * factorial(4)
 * num=4 / 4 * factorial(3)
 * num=3 / 3 * factorial(2)
 * num=2 / 2 * factorial(1)
 * 
 * factorial(num) = num * factorial(num-1)
 * 
 * num=1 / 1 -> base case
 */