function firstCharacter(str) {
  if (str === '') {
    return '';
  }
  let words = str.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result = result + words[i][0];
  }
  return result;
}

/*
miss

1. 고차함수를 사용하기 위해 고차함수에만 너무 집중함
2. 반복문을 돌려 [i]번째 단어의 첫 글자[0]를 유추하는 데 반복문을 생각하지 못함
*/