//************Datatype Summary*********/

//Primitive

//7 types: String, Boolean, Number, Null, Undefined, BigInt, Symbol

const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id === anotherId);

const bigNumber = 1234567890098n


//Reference(Non Primitive)

//Array, Objects, Functions

const heroes =["IronMan","Thor","Spiderman","Captain America"];
let myObj = {
    name:"Vinay",
    age:23
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof heroes);