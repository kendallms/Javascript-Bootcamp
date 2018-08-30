let name = '         Kendall Moffett-Sklaroff   '

// Length property
console.log(name.length)

// Convert to upper case 
console.log(name.toUpperCase())

// Convert to Lower case 
console.log(name.toLowerCase())

// Includes MEthod
// let password = 'abs123password098'

// console.log(password.includes('password'))

// Trim method 
// imagine you have a form, and someone adds extra space 
console.log(name.trim())

// Challenge
// function isValidPassword 
// return if password is valid 
// only if length is more than 8 and doesn't contain 'password'
// if not return false 

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
} 
console.log(isValidPassword('askjd'))
console.log(isValidPassword('askjfh2342'))
console.log(isValidPassword('akhddpassword123'))