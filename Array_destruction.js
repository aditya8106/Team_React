// array destruction is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. It provides a convenient way to extract data from arrays and objects without having to access each element or property individually.

// Example of array destruction 
let arr = [1, 2, 3, 4, 5];
let [a, b, c] = arr; // a=1, b=2, c=3
console.log(a); // Output: 1
console.log(b);
console.log(c);
// You can also skip elements in the array by leaving empty spaces in the destructuring assignment
let [x, , y] = arr; // x=1, y=3 (skips the second element)
console.log(x); // Output: 1
console.log(y); // Output: 3
// You can also use the rest operator (...) to collect the remaining elements of the array into a new array
let [first, ...rest] = arr; // first=1, rest=[2, 3, 4, 5]
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
let nums = [5,4,60,7]
let [a1,b1,c1,d] = nums;
console.log(a1,b1)
let nums2 = [10,20,30,40]
let [a3,...rest1] = nums2;
console.log(a3)
console.log(rest1)

// swaping using arry 
let x1 = 7;
let y1 = 8;
[x1,y1] = [y1,x1];
console.log(x1,y1);

let word = 'my name is aditya yegiti'.split(' ')
let [m,n,mn,...am] = word;
console.log(m,n,am,mn); // output : my name [ 'aditya', 'yegiti' ] is