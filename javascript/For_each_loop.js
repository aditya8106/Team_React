// for each loop in JavaScript is used to iterate over the elements of an array or other iterable objects. It executes a provided function once for each element in the array. Here is an example of how to use a for each loop in JavaScript:
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
}
);
// Output:
// 1
// 2
// 3
// 4
// 5
/* why for each loop? 
The for each loop provides a more concise and readable syntax for iterating over arrays compared to traditional for loops. It eliminates the need for manual index management and allows you to focus on the logic you want to apply to each element in the array. Additionally, it can be used with other iterable objects like sets and maps, making it a versatile tool for working with collections of data in JavaScript.  
mean of for each loop is to execute a provided function once for each element in an array or other iterable objects. It allows you to perform operations on each element without having to manage the index or the length of the array manually. This makes it easier to write cleaner and more readable code when working with arrays and other collections of data.
*/
let nums = [42,52,24,98,65];    
nums.forEach((num) => {
    console.log(num * 2);
});
// Output:
// 84
// 104  
// 48
// 196
// 130  
nums.forEach((num, index, array) => {
    /* for each parameter is the current element being processed in the array, 
    and the second parameter is the index of that element in the array. 
    This allows you to access both the value and its position in the array during each iteration of the loop. */
  // this is fixed syntax for for each loop in javascript
    console.log(`Element at index ${index} is ${num} in the array ${array}`);
});
// Output:
// Element at index 0 is 42
// Element at index 1 is 52
// Element at index 2 is 24
// Element at index 3 is 98
// Element at index 4 is 65
