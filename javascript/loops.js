// = 1; i <= 10; i++) {
//     //5X1=5

//     result=j*i
//     console.log(`${j}X${i}=${result}`);
//     console.log("5 X " + i + "=" + i*5);



// }
//Array 
const arr=[1,2,3,4,5,5,5];
let obj={}
function countOccurences(arr){
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){    
            obj[arr[i]]+=1
        } else {
            obj[arr[i]]=1
        }
    }
    return obj;
}
console.log(countOccurences(arr));


console.log(obj[arr[5]]);