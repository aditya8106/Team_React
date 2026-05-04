///local and global variables

function greet(name){
    return `hello!!${name}`
}

let name = "nandu"  //global variable it works on hosting 

console.log(greet(name))



let user ="adi" //global variable works at every where in code using hosting and normal 
function greet2(u){
    let num = 5;  /// local variable - works in function only
    console.log(num)
    return `Hello! ${u}`
}

console.log(num)/// error is num is not defined beacuse num only works in that function because it is local variable
let str = greet2(user)
console.log(str);

function add(num1,num2,num3=1/*default value for numm3 */){
    return num1+num2+num3
}

let res=add(5,6);//take num3 as 1 cause default value
console.log(res);
let res2 = add(5,6,5)///default value can re assign
console.log(res2)