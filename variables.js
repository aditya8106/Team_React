console.log("Hello World");
let a1=10;
let b1=20;
let c=a1+b1;
console.log(c);
    let num = 3;
    console.log(num+4);

var name="John";
console.log(name);  // using variable to print 
name="Doe";     /// reassigning the value of name
console.log(name);
if (true){
    var name="Jane"; /// function scope
}
console.log(name);
  
if (true){
    let name="nandu"; /// block scope
}
console.log(name);

//const pi=3.14; /// constant variable 
//console.log(pi);
// pi=3.1415; // error
//const  a=5;  
//const  b=10;
 ///[a,b]=[b,a]; /// error const cannot be reassigned  
//console.log(a,b);
let  a2=5;
let  b2=10;
 [a2,b2]=[b2,a2];
console.log(a2,b2);

let name1 = "adityA";
console.log(name1);
///let name2 = "ADITYA "s phone number is 1234567890"; /// error
let name2 = "ADITYA 's phone number is 1234567890";
console.log(name2);

let userName = "aditya"; // variable declaration type1
let userName2 = 'aditya'; // variable declaration type2
let user_name = `aditya`; // variable declaration type3
//let 1username = "aditya"; // error variable name cannot start with a number
//let user-name = "aditya"; // error variable name cannot contain hyphen
//let user name = "aditya"; // error variable name cannot contain space
//let userName = "aditya"; // error variable name cannot be redeclared
let message = `Hello, ${userName}!.`; /// template literal
console.log(message);




// small program of variables and constants in JavaScript
let radius = 5;
const pi= 3.14; /// constant variable for pi 
let area = pi * radius ** 2; /// area of circle
console.log(`Area of circle with radius ${radius} is ${area}.`); /// template literal with expression  