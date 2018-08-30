// undefined for variable 

let name = 'Kendall'

if (name === undefined){
    console.log ('Please give a name')
} else {
    console.log(name)
}

// undefined for function arguments 
// undefined as the function return rdefault value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// null as assigned value 
let age = 27
age = null

console.log(age)