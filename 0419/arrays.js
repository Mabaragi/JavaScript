

const colors = ['red', 'blue', 'green']

const printFunc = function (color) {
  console.log(color)
}

colors.forEach( function(color, index, array) {
  console.log(color)
  console.log(index)
  console.log(array)
})

numbers = [1, 2, 3, 4 ,5]
numbers.forEach(function (number){
  number *= 2
})
console.log(numbers);

const a = numbers.map(function (number, index, array)  {
  return numbers[index] *= 2
}
  )

console.log(numbers);
console.log(a);