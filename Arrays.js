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
// different data types in array
let mixedArray = [1, "hello", true, { name: "John" }, [1, 2, 3],function(){return "hello world"}];
console.log(mixedArray); // Output: [1, "hello", true, { name: "John" }, [1, 2, 3]]
console.log(mixedArray[5]());
mixedArray[5]();
// more array methods 

console.log(mixedArray[4].pop());
console.log(arr2.shift()); // 1 remover from the start of the array [1,2,3,4,0,5,6] becomes [2,3,4,0,5,6]
console.log(arr2)// Output: [2, 3, 4, 0, 5, 6]
console.log(arr2.unshift(8));// 8 added to the start of the array [2,3,4,0,5,6] becomes [8,2,3,4,0,5,6]
// splice method is used to add or remove elements from an array at a specific index. It takes three parameters: the starting index, the number of elements to remove, and the elements to add (optional).
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1); // removes 1 element at index 2 (the number 3)
console.log(arr3); // Output: [1, 2, 4, 5]
arr3.splice(2); // removes all elements from index 2 to the end of the array
console.log(arr3); // Output: [1, 2]
arr3.splice(1, 0, 10, 20); // adds 10 and 20 at index 1 without removing any elements
console.log(arr3); // Output: [1, 10, 20, 2]
arr3.splice(1, 2, 30); // removes 2 elements at index 1 (10 and 20) and adds 30 at index 1
console.log(arr3); // Output: [1, 30, 2]
arr3.splice(0,1); // removes 1 element at index 0 (the number 1)
console.log(arr3); // Output: [30, 2]