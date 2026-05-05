/// this keyword 

/*   
When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object.

Because the fullName method is a method of the person object.

Example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};*/  


let laptop ={
    cpu:'i9',
    ram:16,
    brand:'HP',
    getconfig:function(){
       // console.log(cpu);//errorr can't access that variable
       console.log(this.cpu)  /// this is used take unaccessable elements in object like CPU in ex.
    }
}
console.log(laptop.getconfig())