//// data types and type conversion in javascript
/// data types is two types 
// 1. primitive data types
// 2. non-primitive data types
    /// primitive data types are number, string, boolean, null, undefined, symbol
    /// non-primitive data types are object, array, function 
//primitives    
let data = 8
let user = "nandu"
let num1 = 25458664125.8
console.log(num1 * 25); /// number
console.log(typeof num1); /// number
let num2 = "25458664125.8"
console.log(num2 * 25); /// string is converted to number
let num3 = 0xff
console.log(num3); /// hexadecimal number
let num4 = 1.5e12
console.log(num4); /// exponential notation
let num5 = 10_000_000
console.log(num5); /// numeric separator
let num6 = -5/0
console.log(num6); /// infinity
console.log(Number.MAX_VALUE); 
console.log(Number.MIN_VALUE);
let bigInt = 1234567890123456789012345678901234567890n
console.log(bigInt+2n); /// bigInt
let str1 = "Hello"
console.log(str1); /// string
let str2 = 'Hello'
console.log(str2);
console.log(str1[str1.length-1]); /// accessing last character of string
let firstName = "Aditya"
let lastName = "Nandu"
let fullName = firstName + " " + lastName
console.log(fullName); /// string concatenation
let name = 'Aditya "nandu"'
console.log(name); /// string with double quotes inside single quotes
let name3 = "Aditya \"nandu\" \n is a student"
console.log(name3); /// string with double quotes inside double quotes using escape character
let bool  = 5 > 3
console.log(bool); /// boolean
let bool2 = 5 < 3
console.log(bool2); /// boolean
console.log(typeof bool); /// boolean
let undef;
console.log(undef); /// undefined
console.log(typeof undef); /// undefined
let nul = null
console.log(nul);
console.log(typeof nul); /// object (this is a known bug in javascript)
let numStr = 5
console.log(typeof numStr); /// number
console.log(typeof(numStr + "navin")); /// number is converted to string