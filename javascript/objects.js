///objects means An object is a dynamic data structure that stores related data as key-value pairs, where each key uniquely identifies its value.

let person = {
    name: "John",
    age: 30,
    city: "New York",
    //we can write a key as 
    'work experience': 6
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
// Accessing a property with a space in its name using bracket notation
console.log(person['work experience']); // Output: 6
console.log(person); // Output: { name: 'John', age: 30, city: 'New York', 'first name': 6 }

// Adding a new property to the object
person.country = "USA";
console.log(person.country); // Output: USA
// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31  
// Deleting a property from the object
delete person.city;
console.log(person.city); // Output: undefined
// Checking if a property exists in the object
console.log('name' in person); // Output: true
console.log('city' in person); // Output: false

//complex object
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
console.log(student.name); // Output: Alice
console.log(student.age); // Output: 22
console.log(student.courses[1]); // Output: Science
console.log(student.address()); // Output: 123 Main St, Anytown, USA
console.log(student.marks.Math); // Output: 85
console.log(student.marks.Science); // Output: 90
console.log(student.marks.Literature); // Output: 88
student.marks.Math = 95; // Modifying a nested property
console.log(student.marks.Math); // Output: 95
delete student.marks.Science; // Deleting a nested property
console.log(student.marks.Science); // Output: undefined
console.log(student.marks.Science?student.marks.Science.length:0); // Output: 0