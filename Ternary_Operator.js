/// Ternary Operator
// The ternary operator is a concise way to write an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:
// condition ? expressionIfTrue : expressionIfFalse

/*
let age = 18
let isindian = true
if (age >= 18 && isindian) {
    console.log("You are eligible to vote")
} else {
    console.log("You are not eligible to vote")
}
*/   // The above code can be rewritten using the ternary operator as follows:


let age = 18
let isindian = true
let result1 = age >= 18 && isindian ? "You are eligible to vote" : "You are not eligible to vote"
console.log(result1); /// You are eligible to vote
let a = 6;
let result2 = a % 2 === 0 ? "Even" : "Odd"
console.log(result2); /// Even