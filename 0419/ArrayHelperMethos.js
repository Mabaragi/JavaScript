const products = [
  {name: 'cucumber', type: 'vegetable'}, // product
  {name: 'banana', type: 'fruit'},
  {name: 'carrot', type: 'vegetable'},
  {name: 'apple', type: 'fruit'},  
]

const fruitfilter = function (product){
  return product.type === 'fruit'
}

const fruits = products.filter(fruitfilter)
console.log(fruits)
console.log(products);

