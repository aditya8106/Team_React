// Array special methods: map, reduce, filter
// filter method
// filter method creates a new array with all elements that pass the test implemented by the provided function. It takes a callback function as an argument, which is called for each element in the array. The callback function should return true to keep the element in the new array, or false to exclude it.
let numbers11 = [1, 2, 3, 4, 5];
let evenNumbers = numbers11.filter(function(number) {
    return number % 2 === 0; // this is the test implemented by the provided function. It checks if the current element (number) is even by using the modulus operator (%). If the number is even, it returns true, and the number will be included in the new evenNumbers array. If the number is odd, it returns false, and the number will be excluded from the new array.
});
console.log(evenNumbers); // Output: [2, 4]
//or using arrow function
let oddNumbers = numbers11.filter(number => number % 2 !== 0 ? true : false);
console.log(oddNumbers); // Output: [1, 3, 5]
// using for each loop to achieve the same result as filter method
numbers11.filter(number => number % 2 === 0).forEach(number => console.log(number)); // Output: 2 4  


// map method 
// map method creates a new array with the results of calling a provided function on every element in the calling array.
let squaredNumbers = numbers11.map(function(number) {
    return number * number; // this is the function that will be called for each element in the array. It takes the current element (number) as an argument and returns its square (number * number). The map method will create a new array with the squared values of each element in the original numbers11 array.
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
//or using arrow function
let cubedNumbers = numbers11.map(number => number * number * number);
// number * number * number is the same as Math.pow(number, 3) or number ** 3
console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]

// using filter and map and for each loop to achieve the same result as map method
numbers11.filter(number => number % 2 === 0).map(number => number * number).forEach(number => console.log(number)); // Output: 4 16


// reduce method
// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It takes a callback function as an argument, which is called for each element in the array, and an optional initial value for the accumulator.

let sum = numbers11.reduce(function(accumulator, currentValue) {
        return accumulator+currentValue;
})
console.log(sum);
// or using arrow function
let product = numbers11.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(product); // Output: 120 means 1*2*3*4*5 = 120

// using filter and reduce and for each loop to achieve the same result as reduce method
let sumOfEvenNumbers = numbers11.filter(number => number % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sumOfEvenNumbers); // Output: 6 means 2+4 = 6
let sumproduct = numbers11.filter(number =>number%2===0).map(number => number*number).reduce((a,b)=>a*b);
console.log(sumproduct);