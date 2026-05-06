// Arrays meanas to store multiple values in a single variable. It is a data structure that can hold a collection of items. In JavaScript, arrays are used to store multiple values in a single variable and can hold different types of data, including numbers, strings, objects, and even other arrays.
// Example of an array

let arr = new Array(1, 2, 3, 4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]
let arr2 = [1,2,3,4,0,5,6]  // second type for declairing array
arr2.push(8);
console.log(arr2);

arr.push(100);
console.log(arr);
console.log(arr[3]); ///fetching reqired postionn for knowing value
console.log(arr[9]);///undefined
arr.pop(4)
console.log(arr);
