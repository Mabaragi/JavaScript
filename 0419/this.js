// const myFunc = function () {
//   console.log(this)
// }

// // myFunc()   


const myObj = {
  numbers : [1, 2],
  myFunc() {
    console.log(this) // myObj
    this.numbers.forEach(function (number) {
      console.log(number) //1
      console.log(this) // global
    }
      )
  }
}

myObj.myFunc()