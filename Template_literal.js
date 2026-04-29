/// template literal
/// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were introduced in ES6 (ECMAScript 2015).
//
//with old way
let name1 = "John"
let age1 = 30
let message1 = "My name is " + name1 + " and I am " + age1 + " years old."
console.log(message1); /// My name is John and I am 30 years old.
//with template literal
let name2 = "John"
let age2 = 30
let message2 = `My name is ${name2} and I am ${age2} years old.`
console.log(message2); /// My name is John and I am 30 years old.
//
//
//
let num = 5
let result3 = `The square of ${num} is ${num * num}.`
console.log(result3); /// The square of 5 is 25.