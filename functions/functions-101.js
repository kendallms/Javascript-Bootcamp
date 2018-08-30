// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser ()
greetUser()
greetUser()

let square = function(num) {
   let result = num * num 
   return (result)
}
let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area 
// convert Fahrenheit to Celsius 
// call 32---> 0 
// 68 ----> 20 

// define function, call it, do something with return values 
// use temp 

let converter = function(temp){
  
    let celsius = (temp - 32) * (5 / 9);

    return celsius 
}

let result = converter(32)
let resultB = converter(68)
console.log(result)
console.log(resultB)