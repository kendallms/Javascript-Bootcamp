let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}.`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}.`)

// Name, Age, Location 

let person = {
    name: 'Sam Legarreta',
    age: 32,
    location: 'Washington D.C.'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1;
console.log(`A year later and ${person.name} is ${person.age} and still lives in ${person.location}`)
