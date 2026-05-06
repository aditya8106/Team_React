// constructor means a function that is used to create an object and initialize its properties. It is a special type of function that is called when an object is created using the new keyword. The constructor function can take parameters to set the initial values of the object's properties. In JavaScript, the constructor function is defined using the class syntax or by creating a function and using it as a constructor with the new keyword.

// Example of a constructor function using class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);  
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30 
console.log(person2.name); // Output: Bob
console.log(person2.age);  // Output: 25   

// Example of a constructor function using function syntax
function Laptop(cpu, ram, brand,work) {
    this.cpu = cpu;
    this.ram = ram;
    this.brand = brand;

    this.work = function (){
        console.log("hey this is my fav lapyy");
    }
}

const lap1 =  new  Laptop('i9',8,'Lenovo');
console.log(lap1);

//// constructor class  or functions doesn't have any return statements 
