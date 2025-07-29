let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueinNumber = Number(score)
// console.log(typeof valueinNumber);
// console.log(valueinNumber);


let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

let someNumber = 45

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber));


//*************Operations************/

let value = 45
let negValue = -value
// console.log(negValue);

let str1 = "Wassup"
let str2 = " TempestWolf"

let str3 = str1 + str2

// console.log(str3);

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

console.log(typeof heroes);








