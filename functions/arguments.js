// here we explored multiple arguments
// let add = function (a, b, c){
//     return a + b + c
// }

//  let result = add(10, 1, 5)
//  console.log(result)

// //  default arguments
// // to do a default value, define it in the function parenthesis
// let getScoreText = function (name = 'Anonymous', score = 0){
//     return `Name: ${name} - Score: ${score}`
//     // template string is better! 
//     // return 'Name: ' + name + ' ' + ' - Score: ' + score

// }
// let scoreText = getScoreText(undefined, 99)
// console.log(scoreText)

// Challenge: multiple areguments & default value 
// Tip calculator ! Create function to show tip amount 
// Total, tipPercent(default: 20% === .2)

// remember default value gets defined in function argument
let tipCalculator = function (totalBill, tipAmount = .2){
    tipPercent = tipAmount * 100  
    tipInDollars = totalBill * (tipAmount)
    // return tipAmount
    return `A ${tipPercent}% tip on $${totalBill} would be $${tipInDollars}`
}
let finalAmount = tipCalculator(40, .25)
console.log(finalAmount)

// return a template string "a 25% tip on $40 would be $10"