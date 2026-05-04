//arrow functions 
 
//fnction expression

let add =function(num1,num2,num3=1/*default value for numm3 */){
    return num1+num2+num3
}
//arrow function 
let add1 =(num4,num5)=>{ //we can write it as 
                    //let add1 = (nums4,num5)=>num4+num5;   if there is single statement like this there is no need of {} and return 
    return num4+num5
}

let s1 = add(1,2,4)
let a = add1(67,66)
console.log(s1,a)