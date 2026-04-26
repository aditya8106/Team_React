/// type conversion and type coercion in javascript
// type conversion is the process of converting one data type to another data type
// type coercion is the process of converting one data type to another data type implicitly by javascript
let num = 6
console.log(num); /// number
let str = String(num)
console.log(str);
console.log(typeof str); /// string
console.log(typeof num); /// number
let str2 = "123"
let num2 = Number(str2)
console.log(num2);
console.log(typeof num2);
console.log(typeof str2); /// string
let bool = true
console.log(bool);
let num3 = Number(bool)
console.log(num3);
console.log(typeof num3);
console.log(typeof bool); /// boolean
let x 
console.log(typeof x, x); /// undefined
x = 8
console.log(typeof x, x); /// number
x = x+""
console.log(typeof x, x); /// string + concatenation coverts number to string 
x = +x + 2 /// unary plus operator converts string to number
console.log(typeof x, x); /// string + operator converts string to number
x = !x
console.log(typeof x, x); /// boolean
console.log(Boolean(9)); /// boolean
console.log(Boolean(0)); /// boolean
console.log(Boolean(-9)); /// boolean except 0 all numbers are true
console.log(Boolean(""));   /// boolean except empty string all strings are true
console.log(Boolean("hello"));   /// boolean
console.log(Boolean(null));   /// boolean1  
console.log(Boolean(undefined));   /// boolean null and undefined are false


x = x - 2
console.log(typeof x, x); 
let user = "123 aditya"
console.log(typeof user, user); /// string
let num4 = Number(user)
console.log(typeof num4, num4); /// number user string cannot be converted to number so it returns NaN (Not a Number)
/// then we use parseInt() function to convert string to number
let num5 = parseInt(user) // if  the string starts with a number then it converts the number and ignores the non-numeric characters if the string does not start with a number then it returns NaN  
console.log(typeof num5, num5); /// number parseInt() function converts string to number and ignores the non-numeric characters