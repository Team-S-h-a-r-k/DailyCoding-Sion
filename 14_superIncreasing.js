function superIncreasing(arr) {
  let sum = arr[0]
  
    for(let i=1; i<arr.length; i++) {
      // arr[i]가 이전 요소의 합보다 작지 않다면(false가 아니라면)
      // 계속 반복문이 돌아갈 수 있도록 작성하였다.
      // * 1. 다시 반복문이 돌아올 때마다 이곳에서 걸러준다
      if(sum >= arr[i]) {
        return false;
      }
      // * 2. 계속 합이 되도록 반복
      sum = sum + arr[i]
      console.log(sum)
    }
    return true;
}
superIncreasing([1, 2, 4, 8, 15])

/**
 * arr[1]부터 비교하면 되기 때문에 i는 1부터 시작해서 반복문을 만들었다.
 * 그런데 arr[0] 값이 sum에 포함이 되지 않아 통과가 되지 않았다.
 * 코드를 보니 sum에 0 값을 주었었고, 이를 아예 arr[0]의 값으로 주었더니
 * 무사히 통과되었다.
 */