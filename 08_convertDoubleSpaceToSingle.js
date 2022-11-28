function convertDoubleSpaceToSingle(str) {
  let result = '';
  let before = '';
  for (let i = 0; i < str.length; i++) {
    if (before !== ' ' || str[i] !== ' ') {
      result = result + str[i];
      // console.log(result)
    }
    before = str[i];
    console.log(before)
  }
  return result;
}
convertDoubleSpaceToSingle('string  with  double  spaces');
/**
 * 레퍼런스를 참고했다..
 * 
 * console.log(result)를 했을 때
s
st
str
stri
strin
string
string 띄어쓰기
string w
string wi
string wit
string with
string with 띄어쓰기
string with d
string with do
string with dou
string with doub
string with doubl
string with double
string with double 띄어쓰기
string with double s
string with double sp
string with double spa
string with double spac
string with double space
string with double spaces

 * console.log()before를 했을 때
s
t
r
i
n
g
(2) 
w
i
t
h
(2)  
d
o
u
b
l
e
(2)
s
p
a
c
e
s

convertDoubleSpaceToSingle('string  with  double  spaces');
이렇게 잘 출력되는 걸 확인 할 수 있다. -> string with double spaces
 */