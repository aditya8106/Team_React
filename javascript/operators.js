//operators
//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
let c = true
let d = true  
console.log(c + d); 
let num = 5
 num = num + 1 /// let num +=1 we can use tthiss

console.log(num);
let num2 = 5
num2++ /// post increment operator
console.log(num2);
let num3 = 5
console.log(++num3); /// pre increment operator 
console.log(num3++); /// post increment operator
let num4 = 5
let x = num4++ /// post increment operator returns the value before incrementing
let y = ++num4 /// pre increment operator returns the value after incrementing
console.log(x,y); /// post increment operator returns the value before incrementing
let num5 = 5
console.log( num5**2); /// exponentiation operator
console.log( num5**3); /// exponentiation operator
console.log( Math.pow(num5,4)); /// exponentiation operator

/// relational operators

console.log(5 > 6); /// true
console.log(5 < 6); /// true
let data = 7 < 8
console.log(data); /// true
console.log(5 >= 5); /// true
console.log(5 <= 5); /// true
console.log("6" < "5"); /// false  because in lexicographical order "6" comes after "5"
console.log(5 == "5"); /// true
console.log(5 === "5"); /// false
console.log(5 != "5"); /// false
console.log(5 !== "5"); /// true
let dat = "pent" > "Ben"
let dat2 = "pent" < "Ben"
console.log(dat2); /// false because in lexicographical order "pent" comes after "Ben"
console.log(dat); /// true because in lexicographical order "pent" comes after "Ben"
let numtostr = 5 + "5"
console.log(numtostr);
let strtonum = "5" - 5
console.log(strtonum); /// 0 because - operator converts string to number
let  strtonum2 = "5" + 5
console.log(strtonum2); /// 55 because + operator converts number to string
let strtonum3 = "5" * 5
console.log(strtonum3); /// 25 because * operator converts string to number
let strtonum4 = "5" / 5
console.log(strtonum4); /// 1 because / operator converts string to number
let strwithnum = "aditya" + 5
console.log(strwithnum); /// aditya5 because + operator converts number to string
let strwithnum2 = "aditya" - 5
console.log(strwithnum2);
let strwithnum3 = "aditya" * 5
console.log(strwithnum3);
let strwithnum4 = "aditya" / 5
console.log(strwithnum4); /// NaN because - * / operator cannot convert string to number and returns NaN (Not a Number)
let strwithnum5 = "aditya" < 5
console.log(strwithnum5); /// false because in lexicographical order "aditya" comes after "5"
console.log("6" > 2); /// true because in lexicographical order "6" comes after "2"
console.log("6" < 2); /// false because in lexicographical order "6" comes after "2"
console.log("99" > 89); /// true because in lexicographical order "99" comes after "89"
console.log("99" < 89); /// false because in lexicographical order "99" comes after "89"
console.log("" == true); /// false because empty string is falsy value and true is truthy value
console.log("" == false);/// truee
console.log("" > 0); ///  false 



///logical operators
console.log(true && true); /// true
console.log(true && false); /// false
console.log(false && true); /// false
console.log(false && false); /// false
let X = 7, Y = 8,Z=9  
let data2 = X < Y && Y < Z
console.log(data2); /// true because both conditions are true
console.log(true || true); /// true
console.log(true || false); /// true
console.log(false || true); /// true
console.log(false || false);    /// false
let data3 = X < Y || Y > Z  
console.log(data3); /// true because one of the conditions is true
console.log(!true); /// false
console.log(!false); /// true
let data4 = !(X < Y) /// false because X < Y is true and ! operator negates it
console.log(data4); /// false