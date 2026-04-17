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
 [a,b]=[b,a]; /// error const cannot be reassigned  
console.log(a,b);
let  a2=5;
let  b2=10;
 [a2,b2]=[b2,a2];
console.log(a2,b2);