// Global scope (converter, result, resultB)
    // local scope(temp, celsius)
        // local scope (isFreezing)
let converter = function (temp) {

    let celsius = (temp - 32) * (5 / 9);

    if (celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

let result = converter(32)
let resultB = converter(68)

console.log(result)
console.log(resultB)