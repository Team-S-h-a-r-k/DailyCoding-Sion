function convertListToObject(arr) {
  // arr[i][0] = key 
  // arr[i][1] = value
  let obj = {};
  for (let i=0; i < arr.length; i++) {
    if (arr[i].length > 0 && obj[arr[i][0]] === undefined) {
      obj[arr[i][0]] = arr[i][1]
    } 
  }
  return obj;
}
// 성공
/**
 * miss
 * 1. 객체 생성 방식에 여전히 익숙하지 않다. obj[arr[i][0]] = arr[i][1]
 */