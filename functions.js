/// functions  means that the function is defined in a separate file and can be imported and used in other files. This allows for better organization and modularity of code, as well as easier maintenance and reusability. Functions can be defined in a functions.js file and then imported into other files using the import statement. This way, you can keep your code clean and organized while still being able to use the functions across different parts of your application.
// Example of a function defined in functions.js
//it is a reusable function that can be imported and used in other files
// functions.js

//function using  parameters and returning a value
export function add(a, b) {
    return a + b;
}
export function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(add(5, 3)); // Output: 8 
// Example of importing and using the functions in another file
// main.js
console.log(greet('Bob')); // Output: Hello, Bob!
console.log(add(10, 20)); // Output: 30
console.log(greet('Charlie')); // Output: Hello, Charlie!
console.log(add(15, 25)); // Output: 40

let name = 'David';
let greeting = greet(name);
console.log(greeting); // Output: Hello, David!

//function expression
export const multiply = function(a, b) {
    return a * b;
};

let result = multiply(3, 4);
console.log(result); // Output: 12
console.log(multiply(4, 5)); // Output: 20

//arrow function
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    return a / b;
};
console.log(divide(10, 2)); // Output: 5

console.log(typeof add); // Output: function
console.log(typeof greet); // Output: function