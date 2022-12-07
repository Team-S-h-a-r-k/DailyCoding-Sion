function modulo(num1, num2) {
  // * num1이 num2로 뺄 수 없을 때까지 빼기
  
  if(num2 === 0) {
    return 'Error: cannot divide by zero'
  }
  // true 값만 반복
  // num1이 num2보다 작아질 때까지 반복
  // 딱 떨어질 경우를 대비해서 같거나 작을 경우로 조건
  while(num1 >= num2) {
    num1 = num1 - num2
  }
  return num1;
}
modulo(25, 4);