// Arrow function
const arrow1 = function (name) {
  return `hello ${name}`
}
console.log(arrow1('aiden'))
// 1. funcion 키워드 생략 가능, 화살표 추가
const arrow2 = (name) => {
  return `hello ${name}`
}
console.log(arrow2('aiden'))

//2. 인자가 1개인 경우에만 () 생략 가능
const arrow3 = name => {
  return `hello ${name}`
}

//3. 함수 바디가 return 을 포함한 표현식 1개일 경우에 {} & return 삭제 가능
const arrow4 = name => `hello ${name}`
console.log(arrow4(4))

