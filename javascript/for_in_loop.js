///for in loop is used to iterate over the properties of an object or the elements of an array. It allows you to access each key or index in the object or array.

// Example of using for in loop with an object

let student = {
    name: "Alice",
    age: 22,    
    courses: ["Math", "Science", "Literature"],
    address: function() {
        return "123 Main St, Anytown, USA";
    },
    marks: {
        Math: 85,
        Science: 90,
        Literature: 88
    }
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

for (let key in student.marks) {
    console.log(key + ": " + student.marks[key]);
} // Output:
// name: Alice
// age: 22
// courses: Math,Science,Literature
// address: 123 Main St, Anytown, USA
// marks: [object Object]   
// Math: 85
// Science: 90
// Literature: 88

// Example of using for in loop with an array

let fruits = ["Apple", "Banana", "Cherry"];
for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry