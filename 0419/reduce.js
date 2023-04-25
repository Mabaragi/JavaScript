const tests = [90, 90, 80, 19]

const sum = tests.reduce(function (total, x) {
  return total + x // 첫번째 인자 total: 이어 받는 값, x: 원소
}, 0)// 맨 처음 total 값
console.log(sum);