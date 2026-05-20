// Recursion is a programming technique where a function calls itself.
// A recursive function typically has two main components: a base case that stops the recursion, and a recursive case that breaks the problem into smaller subproblems and calls itself with those subproblems.

function hii(){
    console.log("hii");
    hii();  // this is the recursive call, it will call the function again and again until it reaches the base case
}

// hii();// this will cause a stack overflow error because there is no base case to stop the recursion



// Example of a recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0) { // this is the base case, it stops the recursion when n is 04    
        return 1;
    }   
    return n * factorial(n - 1); // this is the recursive case, it breaks the problem into smaller subproblems and calls itself with those subproblems
}
console.log(factorial(5)); // Output: 120 - the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120

// Example of a recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
/* fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The nth Fibonacci number can be calculated using the formula: F(n) = F(n-1) + F(n-2) with base cases F(0) = 0 and F(1) = 1. In this recursive function, we check for the base cases (n === 0 and n === 1) to stop the recursion, and for any other value of n, we call the function recursively with n - 1 and n - 2 to calculate the Fibonacci number.
example
F(0) = 0
F(1) = 1
F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
F(5) = F(4) + F(3) = 3 + 2 = 5
F(6) = F(5) + F(4) = 5 + 3 = 8
in code it starts from  F(6) = F(5) + F(4) = f(5) + f(4) = 5 + 3 = 8
F(5) = F(4) + F(3)= f(4) + F(3) = F(3) + F(2) + F(3) = F(3) + F(2) + F(2) + F(1) = F(3) + F(2) + F(2) + 1 = F(3) + 1 + 1 + 1 = F(3) + 3 = 5
F(4) = F(3) + F(2) = F(3) + 1 = 3
F(3) = F(2) + F(1) = F(2) + 1 = 2
F(2) = F(1) + F(0) = 1 + 0 = 1
F(1) = 1 (base case)
F(0) = 0 (base case) 
     */

    if (n === 0) { // base case
        return 0;
    }
    if (n === 1) { // base case
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}
console.log(fibonacci(6)); // Output: 8 - the 6th Fibonacci number is 8