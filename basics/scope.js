// Javascript uses lexical scope (static scope)
// Global Scope - defined outside of all code blocks
// Local Scope - defined inside of code blocks & can only be used inside of those code blocks

// Global scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

// In a scope you can access variables defined in that scope, or in any parent/ancestor sope 

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true){
        let varFour = 'varFour'
    }
}

if (true){
    let varThree = 'varThree'
}

// console.log(varTwo)