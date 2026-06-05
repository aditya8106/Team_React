// Set introduced in ES6 it is a collection of unique values. It can store any type of value, whether primitive or object references.
// A Set can be created using the Set constructor, which takes an iterable (like an array) as an argument. The Set will automatically remove any duplicate values from the iterable.
let mySet = new Set([1, 2, 3, 4, 5, 5, 6]);
console.log(mySet); // Output: Set(6) {1, 2, 3, 4, 5, 6} - the duplicate value (5) is removed

//  basically a set is a class that provides methods to add, delete, and check for the presence of values in the set. It also has a size property that returns the number of unique values in the set.
let set = new Set("hello");
console.log(set); // Output: Set(4) {"h", "e", "l", "o"} - the duplicate value (l) is removed
// cause set split input like {"h", "e", "l", "o"} this 

// Set has several methods to manipulate the set of values. Some of the commonly used methods are:
// - add(value): Adds a new value to the set.
// - delete(value): Removes a value from the set.
// - has(value): Checks if a value is present in the set.
// - clear(): Removes all values from the set.

set.add("world");
set.add("hello"); // this will not be added to the set because it is already present
set.add(8);
set.add(9);
set.add(10);
console.log(set); // Output: Set(7) {"h", "e", "l", "o", "world", 8, 9, 10}
set.forEach((n) => console.log(n)); // Output: h e l o world 8 9 10
set.delete("world");
console.log(set); // Output: Set(6) {"h", "e", "l", "o", 8, 9, 10}
console.log(set.has("world")); // Output: false
console.log(set.has("hello")); // Output: true
// in set forEach method the callback function takes three arguments: the current value (n), same value (n) again, and the set itself (set). The forEach method will call the callback function for each value in the set, passing the current value, same value, and set as arguments. In this example, we are only logging the current value (n) and index to the console.
set.forEach((n, index,set,n2) => console.log(n, index,set)); // Output: h 0 e 1 l 2 o 3 8 4 9 5 10 6

console.log(set.size); // Output: 6 - the size property returns the number of unique values in the set
console.log(set.has(33)); // op :- false 