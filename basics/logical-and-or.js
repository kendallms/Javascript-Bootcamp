//  let temp = 55

// Logical And Operator - True if both sides are TRUE, false otherwise 
// Logical Or Operator - True if at least one side is TRUE, false otherwise

// if (temp >= 60 && temp <= 90) {
//     console.log('It is pretty nice out')
// }else if (temp <= 0 || temp >= 120) {
//     console.log ('Do not go outside')
// } else{
//     console.log('Eh. Do what you want')
// }

// Challenge: Use && and || for restaurant for vegan option at reservation

let isGuestOneVegan = false
let isGuestTwoVegan = true 

// Are both vegan? Only offer up vegan dishes 
// At least one vegan? Make sure to offer some vegan 
// Else, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Offer ONLY vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Offer SOME vegan ish')
} else {
    console.log('whatever--vegan ish is alright')
}