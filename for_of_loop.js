// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

// Example of using for of loop with an array

let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
 for(let key in fruits){
    console.log(key + ": " + fruits[key]);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry