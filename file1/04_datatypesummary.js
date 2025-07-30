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


// ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non Primitive)

let myYoutubename = "Tempestwolf"

let anothername = myYoutubename
anothername = "Brokenfury"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email : "tempestwolf@gmail.com",
    upi : "brokenfury@bcc"
}

let userTwo = userOne

userTwo.email = "Thunderfury@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



