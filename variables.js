console.log("Hello World");
let a1=10;
let b1=20;
let c=a1+b1;
console.log(c);
    let num = 3;
    console.log(num+4);

var name="John";
console.log(name);
name="Doe";
console.log(name);
if (true){
    var name="Jane"; /// function scope
}
console.log(name);

if (true){
    let name="nandu"; /// block scope
}
console.log(name);

const pi=3.14;
console.log(pi);
// pi=3.1415; // error
const  a=5;
const  b=10;
 [a,b]=[b,a];
console.log(a,b);