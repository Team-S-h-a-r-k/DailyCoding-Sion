// 수(num)를 입력받아 1부터 num까지의 합을 리턴
// num >= 0

function sumTo(num) {
  // * base case : 탈출 조건
  if (num <= 1) return num

  // * recursive case
  return  num + sumTo(num-1)
}

/**
 * sumTo(5) = 5 + 4 + 3 + 2 + 1 === 5 + sumTo(4)
 * sumTo(4) = 4 + 3 + 2 + 1 === 4 + sumTo(3)
 * sumTo(3) = 3 + 2 + 1 === 3 + sumTo(2)
 * sumTo(2) = 2 + 1 === 2 + sumTo(1)
 * 
 * sumTo(num) = num + sumTo(num-1) <--- recursive case (쪼개지는 방식)
 * 
 * sumTo(1) = 1 <--- base case (더이상 쪼개지지 않는다)
 * sumTo(0) = 0 <--- base case
 * 
 * if (num === 1) return 1
 * if (num === 0) return 0
 * ===
 * if (num <= 1) return num
 */