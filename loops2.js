//while loop
//loop that continues as long as a specified condition is true
//syntax
//while (condition) {
//  // code block to be executed
//}

//with  out loop
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
//with loop
let i = 0; //initialization
while (i < 5) { //condition
  console.log("Hello World");
  i++; //increment
}   
//output
//Hello World
//Hello World
//Hello World
//Hello World
//Hello World

//do while loop
//do while loop is similar to while loop but it will execute the code block at least once before checking the condition
//syntax
//do {
//  // code block to be executed
//} while (condition);  
let j = 0; //initialization
do {
  console.log("Hello World", j);
  j++; //increment
} while (j < 5);
//output    
//Hello World 0
//Hello World 1
//Hello World 2
//Hello World 3
//Hello World 4


//for loop
//for loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.
//syntax  
//for (initialization; condition; increment) {
//  // code block to be executed
//}
for (let i = 1; i <= 10; i++) {
     console.log(i);
}

//output
//1
//2
//3
//4
//5
//6
//7
//8
//9
//10

for (let i = 1; i <= 10; i++) {
    console.log('hi', i);
} 

//output
//hi 1
//hi 2
//hi 3      
//hi 4
//hi 5
//hi 6  
//hi 7
//hi 8
//hi 9
//hi 10


//why loops are important and diifferent types of loops
//loops are important because they allow us to execute a block of code multiple times without having to write the same code again and again. This makes our code more efficient and easier to read. There are different types of loops in JavaScript, including while loops, do-while loops, and for loops. Each type of loop has its own syntax and use cases, but they all serve the same purpose of allowing us to repeat a block of code until a certain condition is met.
//loops are used in various scenarios, such as iterating over arrays, performing calculations, and creating animations. They are an essential part of programming and are used in almost every programming language. By using loops, we can save time and effort, and make our code more efficient and easier to maintain.
//for loop is used when we know the number of iterations we want to perform, while while loop is used when we want to perform an action until a certain condition is met. do-while loop is used when we want to perform an action at least once before checking the condition. Each type of loop has its own advantages and disadvantages, and the choice of which one to use depends on the specific use case and the requirements of the program.